import { PrismaService } from '#global/prisma.service.js';
import { IProductRepository } from '#products/interfaces/product.repository.interface.js';
import { ProductFactory } from '#products/product.factory.js';
import { IProduct } from '#products/product.js';
import { ProductCreateDTO } from '#products/product.types.js';
import { OrderByCondition, WhereCondition } from '#types/conditions.type.js';
import { FindOptions, SortOrder } from '#types/options.type.js';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductRepository implements IProductRepository {
  private readonly product;
  private readonly productTag;
  private readonly productImage;
  constructor(private readonly prisma: PrismaService) {
    this.product = prisma.product;
    this.productTag = prisma.productTag;
    this.productImage = prisma.productImage;
  }

  async count(keyword: string) {
    const searchOption: WhereCondition = keyword
      ? {
          where: {
            OR: [{ name: { contains: keyword } }, { description: { contains: keyword } }],
          },
        }
      : {};

    const count = await this.product.count(searchOption);

    return count;
  }

  async findMany({ orderBy, page, pageSize, keyword }: FindOptions) {
    let sortOption: OrderByCondition;
    switch (orderBy) {
      case SortOrder.Like:
        sortOption = { orderBy: { likeCount: Prisma.SortOrder.desc } };
        break;
      case SortOrder.Recent:
      default:
        sortOption = { orderBy: { createdAt: Prisma.SortOrder.desc } };
    }

    const searchOption: WhereCondition = keyword
      ? {
          where: {
            OR: [{ name: { contains: keyword } }, { description: { contains: keyword } }],
          },
        }
      : {};

    const products = await this.product.findMany({
      ...searchOption,
      ...sortOption,
      take: pageSize,
      skip: (page - 1) * pageSize,
    });

    return products.map(p => ProductFactory.create(p) as IProduct);
  }

  async findById(id: string) {
    const product = await this.product.findUnique({
      where: { id },
      include: {
        productTags: true,
        owner: { select: { nickname: true } },
        likeUsers: true,
        comments: true,
      },
    });

    return ProductFactory.create(product);
  }

  async create(body: ProductCreateDTO) {
    const { tags, file, ...data } = body;

    const product = await this.product.create({ data });
    const newTags = tags.map(tag => ({ tag, productId: product.id }));

    const createdTags = await this.productTag.createMany({
      data: newTags,
      skipDuplicates: true,
    });

    const fileData = { originalName: file.originalname, fileName: file.filename, productId: product.id };
    const image = await this.productImage.create({ data: fileData, select: { fileName: true } });

    const p = { ...product };
    p.productTags = createdTags;
    p.productImages = [image];

    return ProductFactory.create(p);
  }

  async update(id: string, body: Partial<ProductCreateDTO>) {
    const { tags, file, ...data } = body;
    const fileData = { originalName: file.originalname, fileName: file.filename, productId: id };

    const product = await this.product.update({
      where: { id },
      data: {
        ...data,
        productTags: {
          deleteMany: {},
          create: tags.map(tag => ({ tag, productId: id })),
        },
        productImages: {
          deleteMany: {},
          create: fileData,
        },
        include: {
          productTags: true,
          owner: { select: { nickname: true } },
          likeUsers: true,
          comments: true,
        },
      },
    });
    const image = await this.productImage.findUnique({ where: { productId: id } });

    const p = { ...product };
    p.productImages = [image];

    return ProductFactory.create(p);
  }

  async delete(id: string) {
    const product = await this.product.delete({ where: { id } });

    return ProductFactory.create(product);
  }

  async like(productId: string, userId: string) {
    const product = await this.product.update({
      where: { id: productId },
      data: {
        likeUsers: { connect: { id: userId } },
        likeCount: { increment: 1 },
      },
    });

    return ProductFactory.create(product);
  }

  async unlike(productId: string, userId: string) {
    const product = await this.product.update({
      where: { id: productId },
      data: {
        likeUsers: { disconnect: { id: userId } },
        likeCount: { decrement: 1 },
      },
    });

    return ProductFactory.create(product);
  }
}
