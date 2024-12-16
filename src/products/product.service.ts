import { ForbiddenException } from '#exceptions/http.exception.js';
import { IProductService } from '#products/interfaces/product.service.interface.js';
import { ProductNotFoundException } from '#products/product.exception.js';
import { ProductRepository } from '#products/product.repository.js';
import { ProductInputDTO } from '#products/product.types.js';
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

    return { totalCount, list };
  }

  async getProduct(id: string) {
    const product = await this.productRepository.findById(id);
    if (!product) throw new ProductNotFoundException();

    const tags = product.productTags.map(tagObj => tagObj.tag);
    const { productTags, owner, ...filtered } = product;
    const result = { ...filtered, tags, ownerNickname: owner?.nickname };

    return result;
  }

  async postProduct(data: ProductInputDTO) {
    const { userId } = this.als.getStore();
    const { product, image } = await this.productRepository.create({ ...data, ownerId: userId });
    const imageUrl = `/files/${image.fileName}`;

    return { product, imageUrl };
  }

  async patchProduct(id: string, body: Partial<ProductInputDTO>) {
    const target = await this.productRepository.findById(id);
    if (!target) throw new ProductNotFoundException();

    const { userId } = this.als.getStore();
    if (target.ownerId !== userId) throw new ForbiddenException();

    const product = await this.productRepository.update(id, body);

    return product;
  }

  async deleteProduct(id: string) {
    const target = await this.productRepository.findById(id);
    if (!target) throw new ProductNotFoundException();

    const { userId } = this.als.getStore();
    if (target.ownerId !== userId) throw new ForbiddenException();

    const product = await this.productRepository.deleteById(id);

    return product;
  }

  async postProductLike(productId: string) {
    const target = await this.productRepository.findById(productId);
    if (!target) throw new ProductNotFoundException();

    const { userId } = this.als.getStore();
    if (target.ownerId !== userId) throw new ForbiddenException();
    const product = await this.productRepository.like(productId, userId);

    return { product, isLiked: true };
  }

  async deleteProductLike(productId: string) {
    const target = await this.productRepository.findById(productId);
    if (!target) throw new ProductNotFoundException();

    const { userId } = this.als.getStore();
    if (target.ownerId !== userId) throw new ForbiddenException();
    const product = await this.productRepository.unlike(productId, userId);

    return { product, isLiked: false };
  }
}
