import { ModelBase } from '#types/common.types.js';
import { Article } from '@prisma/client';

export interface ArticleInputDTO extends Omit<Article, keyof ModelBase> {}
export interface ArticleOutputDTO extends Article {
  owner: {
    nickname: string;
  };
}
