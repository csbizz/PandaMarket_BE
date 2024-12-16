import { CommentInputDTO } from '#comments/comment.types.js';
import { CommentFindOptions } from '#types/options.type.js';
import { Comment } from '@prisma/client';

export interface ICommentService {
  getAllComments: () => Promise<Comment[]>;
  getComments: (options: CommentFindOptions) => Promise<{ nextCursor?: string; list: Comment[] }>;
  postComment: (data: Omit<CommentInputDTO, 'ownerId'>) => Promise<Comment>;
  patchComment: (id: string, content: string) => Promise<Comment>;
  putComment: (id: string, data: CommentInputDTO) => Promise<Comment>;
  deleteComment: (id: string) => Promise<Comment>;
}
