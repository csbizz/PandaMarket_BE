import { ModelBase } from '#types/common.types.js';
import { Comment, Product } from '@prisma/client';

export interface ProductInputDTO extends Omit<Product, keyof ModelBase> {
  tags: string[];
  file: { originalname: string; filename: string };
}

export interface ProductOutputDTO extends Product {
  productTags: { tag: string };
  owner: { nickname: string };
  likeUsers: { id: string };
  comments: Comment;
}
