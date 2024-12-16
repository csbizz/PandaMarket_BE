import { CommentInputDTO } from '#comments/comment.types.js';
import { CommentFindOptions } from '#types/options.type.js';
import { Comment } from '@prisma/client';

export interface ICommentRepository {
  findAll: () => Promise<Comment[]>;
  findMany: (options: CommentFindOptions) => Promise<{ nextCursor?: string; list: Comment[] }>;
  findById: (id: string) => Promise<Comment> | null;
  create: (data: CommentInputDTO) => Promise<Comment>;
  update: (id: string, data: { content: string }) => Promise<Comment>;
  delete: (id: string) => Promise<Comment>;
}
