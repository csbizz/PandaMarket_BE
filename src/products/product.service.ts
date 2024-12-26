import { ForbiddenException } from '#exceptions/http.exception.js';
import { IProductService } from '#products/interfaces/product.service.interface.js';
import { ProductNotFoundException } from '#products/product.exception.js';
import { ProductRepository } from '#products/product.repository.js';
import { ProductInputDTO } from '#products/product.types.js';
import { ProductTag } from '#products/tag.js';
import { IStorage } from '#types/common.types.js';
import { FindOptions } from '#types/options.type.js';
import { Injectable } from '@nestjs/common';
import { AsyncLocalStorage } from 'async_hooks';

@Injectable()
export class ProductService implements IProductService {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly als: AsyncLocalStorage<IStorage>,
  ) {}

  async getProducts({ orderBy, page, pageSize, keyword }: FindOptions) {
    const totalCount = await this.productRepository.count(keyword);

    const list = await this.productRepository.findMany({
      orderBy,
      page,
      pageSize,
      keyword,
    });

    return { totalCount, list: list.map(p => ({ ...p.output })) };
  }

  async getProduct(id: string) {
    const product = await this.productRepository.findById(id);
    if (!product.id) throw new ProductNotFoundException();

    return product.output;
  }

  async postProduct(data: ProductInputDTO) {
    const { userId } = this.als.getStore();
    const product = await this.productRepository.create({ ...data, ownerId: userId });

    return product.output;
  }

  async patchProduct(id: string, body: Partial<ProductInputDTO>) {
    const target = await this.productRepository.findById(id);
    if (!target.id) throw new ProductNotFoundException();

    const { userId } = this.als.getStore();
    if (target.ownerId !== userId) throw new ForbiddenException();

    const { tags, file, ...rest } = body;

    if (tags?.length) {
      const productTags = tags.map(tag => new ProductTag({ tag, productId: id }));
      target.tags = productTags;
    }
    if (file) {
      const productImages = [{ originalName: file.originalname, fileName: file.filename, productId: id }];
      target.images = productImages;
    }
    target.values = rest;

    // const product = await this.productRepository.update(id, body);
    const product = await this.productRepository.update(target);

    return product.output;
  }

  async deleteProduct(id: string) {
    const target = await this.productRepository.findById(id);
    if (!target.id) throw new ProductNotFoundException();

    const { userId } = this.als.getStore();
    if (target.ownerId !== userId) throw new ForbiddenException();

    const product = await this.productRepository.delete(id);

    return product.output;
  }

  async postProductLike(productId: string) {
    const target = await this.productRepository.findById(productId);
    if (!target.id) throw new ProductNotFoundException();

    const { userId } = this.als.getStore();
    if (target.ownerId !== userId) throw new ForbiddenException();
    const product = await this.productRepository.like(productId, userId);

    return { product: product.output, isLiked: true };
  }

  async deleteProductLike(productId: string) {
    const target = await this.productRepository.findById(productId);
    if (!target.id) throw new ProductNotFoundException();

    const { userId } = this.als.getStore();
    if (target.ownerId !== userId) throw new ForbiddenException();
    const product = await this.productRepository.unlike(productId, userId);

    return { product: product.output, isLiked: false };
  }
}
