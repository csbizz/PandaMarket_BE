import { IProductImage } from '#products/interfaces/image.interface.js';
import { IProductTag } from '#products/interfaces/tag.interface.js';
import { ProductOutputDTO, ProductProperties } from '#products/product.types.js';

export interface IProduct {
  id: string;
  tags: IProductTag[];
  images: IProductImage[];
  get ownerId(): string;
  get ownerNickname(): string;
  get values(): ProductProperties;
  set values(data: Partial<ProductProperties>);
  get output(): ProductOutputDTO;
  get toDB(): Partial<ProductProperties>;
}
