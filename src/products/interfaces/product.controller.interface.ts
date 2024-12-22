import { ProductInputDTO, ProductOutputDTO } from '#products/product.types.js';
import { CursorPaginationOptions, FindOptions } from '#types/options.type.js';
import { Comment } from '@prisma/client';

export interface IProductController {
  getProducts: (query: Partial<FindOptions>) => Promise<{ totalCount: number; list: ProductOutputDTO[] }>;
  getProductById: (id: string) => Promise<ProductOutputDTO>;
  getComments: (id: string, query: CursorPaginationOptions) => Promise<{ nextCursor?: string; list: Comment[] }>;
  postProduct: (body: ProductInputDTO) => Promise<ProductOutputDTO>;
  postComment: (id: string, content: string) => Promise<Comment>;
  patchProduct: (id: string, body: Partial<ProductInputDTO>) => Promise<ProductOutputDTO>;
  deleteProduct: (id: string) => Promise<ProductOutputDTO>;
  postProductLike: (id: string) => Promise<{ product: ProductOutputDTO; isLiked: boolean }>;
  deleteProductLike: (id: string) => Promise<{ product: ProductOutputDTO; isLiked: boolean }>;
}
