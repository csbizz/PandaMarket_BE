import { PrismaService } from '#global/prisma.service.js';
import { IProductRepository } from '#products/interfaces/product.repository.interface.js';
import { ProductInputDTO } from '#products/product.types.js';
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

    return products;
  }

  async findById(id: string) {
    const product = await this.product.findUnique({
      where: { id },
      include: {
        productTags: { select: { tag: true } },
        owner: { select: { nickname: true } },
        likeUsers: { select: { id: true } },
        comments: true,
      },
    });

    return product;
  }

  async create(body: ProductInputDTO) {
    const { tags, file, ...data } = body;

    const product = await this.product.create({ data });
    const newTags = tags.map(tag => ({ tag, productId: product.id }));

    await this.productTag.createMany({
      data: newTags,
      skipDuplicates: true,
    });

    const fileData = { originalName: file.originalname, fileName: file.filename, productId: product.id };
    const image = await this.productImage.create({ data: fileData });

    return { product, image };
  }

  async update(id: string, body: Partial<ProductInputDTO>) {
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
      },
    });

    return product;
  }

  async deleteById(id: string) {
    const product = await this.product.delete({ where: { id } });

    return product;
  }

  async like(productId: string, userId: string) {
    const product = await this.product.update({
      where: { id: productId },
      data: {
        likeUsers: { connect: { id: userId } },
        likeCount: { increment: 1 },
      },
    });

    return product;
  }

  async unlike(productId: string, userId: string) {
    const product = await this.product.update({
      where: { id: productId },
      data: {
        likeUsers: { disconnect: { id: userId } },
        likeCount: { decrement: 1 },
      },
    });

    return product;
  }
}
