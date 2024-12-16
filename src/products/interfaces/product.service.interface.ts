import { ProductInputDTO, ProductOutputDTO } from '#products/product.types.js';
import { FindOptions } from '#types/options.type.js';
import { Product } from '@prisma/client';

export interface IProductService {
  getProducts: (options: FindOptions) => Promise<{ totalCount: number; list: Product[] }>;
  getProduct: (id: string) => Promise<ProductOutputDTO>;
  postProduct: (data: ProductInputDTO) => Promise<{ product: Product; imageUrl: string }>;
  patchProduct: (id: string, data: Partial<ProductInputDTO>) => Promise<Product>;
  deleteProduct: (id: string) => Promise<Product>;
  postProductLike: (productId: string) => Promise<{ product: Product; isLiked: boolean }>;
  deleteProductLike: (productId: string) => Promise<{ product: Product; isLiked: boolean }>;
}
