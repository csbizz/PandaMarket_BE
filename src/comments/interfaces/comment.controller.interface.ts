import { CommentInputDTO } from '#comments/comment.types.js';
import { Comment } from '@prisma/client';

export interface ICommentController {
  patchComment: (id: string, content: string) => Promise<Comment>;
  putComment: (id: string, body: CommentInputDTO) => Promise<Comment>;
  deleteComment: (id: string) => Promise<Comment>;
}
