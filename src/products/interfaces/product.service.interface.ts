import { ProductInputDTO, ProductOutputDTO } from '#products/product.types.js';
import { FindOptions } from '#types/options.type.js';

export interface IProductService {
  getProducts: (options: FindOptions) => Promise<{ totalCount: number; list: ProductOutputDTO[] }>;
  getProduct: (id: string) => Promise<ProductOutputDTO>;
  postProduct: (data: ProductInputDTO) => Promise<ProductOutputDTO>;
  patchProduct: (id: string, data: Partial<ProductInputDTO>) => Promise<ProductOutputDTO>;
  deleteProduct: (id: string) => Promise<ProductOutputDTO>;
  postProductLike: (productId: string) => Promise<{ product: ProductOutputDTO; isLiked: boolean }>;
  deleteProductLike: (productId: string) => Promise<{ product: ProductOutputDTO; isLiked: boolean }>;
}
