import { ProductInputDTO, ProductOutputDTO } from '#products/product.types.js';
import { FindOptions } from '#types/options.type.js';
import { Product, ProductImage } from '@prisma/client';

export interface IProductRepository {
  count: (keyword: string) => Promise<number>;
  findMany: (options: FindOptions) => Promise<Product[]>;
  findById: (id: string) => Promise<ProductOutputDTO> | null;
  create: (body: ProductInputDTO) => Promise<{ product: Product; image: ProductImage }>;
  update: (id: string, body: Partial<ProductInputDTO>) => Promise<Product>;
  deleteById: (id: string) => Promise<Product>;
  like: (productId: string, userId: string) => Promise<Product>;
  unlike: (productId: string, userId: string) => Promise<Product>;
}
