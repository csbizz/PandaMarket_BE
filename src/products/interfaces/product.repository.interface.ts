import { IProduct } from '#products/interfaces/product.interface.js';
import { ProductCreateDTO } from '#products/product.types.js';
import { FindOptions } from '#types/options.type.js';

export interface IProductRepository {
  count: (keyword: string) => Promise<number>;
  findMany: (options: FindOptions) => Promise<IProduct[]>;
  findById: (id: string) => Promise<IProduct>;
  create: (body: ProductCreateDTO) => Promise<IProduct>;
  update: (product: IProduct) => Promise<IProduct>;
  // update: (id: string, body: Partial<ProductCreateDTO>) => Promise<IProduct>;
  delete: (id: string) => Promise<IProduct>;
  like: (productId: string, userId: string) => Promise<IProduct>;
  unlike: (productId: string, userId: string) => Promise<IProduct>;
}
