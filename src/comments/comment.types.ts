import { ModelBase } from '#types/common.types.js';
import { Comment as PrismaComment } from '@prisma/client';

interface PrismaCommentBase extends Omit<PrismaComment, keyof ModelBase> {}

interface CommentBase extends PrismaCommentBase {}

export interface Comment extends CommentBase, ModelBase {}

export interface CommentInputDTO extends Omit<Comment, keyof ModelBase> {}
