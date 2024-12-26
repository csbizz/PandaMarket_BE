import { ProductTagProperties } from '#products/product.types.js';

export interface IProductTag {
  value: string;
  values: ProductTagProperties;
  productId: string;
}
