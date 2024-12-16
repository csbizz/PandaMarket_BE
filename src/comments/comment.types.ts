import { ModelBase } from '#types/common.types.js';
import { Comment } from '@prisma/client';

export interface CommentInputDTO extends Omit<Comment, keyof ModelBase> {}
