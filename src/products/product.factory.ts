import { ProductImage, ProductImageProperties } from '#products/image.js';
import { IProduct, Product, ProductProperties } from '#products/product.js';
import { ProductTag, ProductTagProperties } from '#products/tag.js';

interface ProductEntity extends Omit<ProductProperties, 'ownerNickname' | 'productTags' | 'productImages'> {
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
