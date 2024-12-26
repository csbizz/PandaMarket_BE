import { ProductImage } from '#products/image.js';
import { IProduct } from '#products/interfaces/product.interface.js';
import { Product } from '#products/product.js';
import { ProductImageProperties, ProductProperties, ProductTagProperties } from '#products/product.types.js';
import { ProductTag } from '#products/tag.js';

export interface ProductEntity extends Omit<ProductProperties, 'ownerNickname' | 'productTags' | 'productImages'> {
  productTags?: ProductTagProperties[];
  productImages?: ProductImageProperties[];
  owner?: { nickname: string };
}

export class ProductFactory {
  static create(properties: ProductEntity): IProduct {
    const { owner, productTags, productImages, ...rest } = properties;
    const tags = productTags?.map(t => new ProductTag(t));
    const images = productImages?.map(i => new ProductImage(i));
    const p = { ...rest, productTags: tags, productImages: images, ownerNickname: owner?.nickname };

    return new Product(p);
  }
}
