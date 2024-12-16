import { ProductInputDTO, ProductOutputDTO } from '#products/product.types.js';
import { CursorPaginationOptions, FindOptions } from '#types/options.type.js';
import { Comment, Product } from '@prisma/client';

export interface IProductController {
  getProducts: (query: Partial<FindOptions>) => Promise<{ totalCount: number; list: Product[] }>;
  getProductById: (id: string) => Promise<ProductOutputDTO>;
  getComments: (id: string, query: CursorPaginationOptions) => Promise<{ nextCursor?: string; list: Comment[] }>;
  postProduct: (body: ProductInputDTO) => Promise<{ product: Product; imageUrl: string }>;
  postComment: (id: string, content: string) => Promise<Comment>;
  patchProduct: (id: string, body: Partial<ProductInputDTO>) => Promise<Product>;
  deleteProduct: (id: string) => Promise<Product>;
  postProductLike: (id: string) => Promise<{ product: Product; isLiked: boolean }>;
  deleteProductLike: (id: string) => Promise<{ product: Product; isLiked: boolean }>;
}
