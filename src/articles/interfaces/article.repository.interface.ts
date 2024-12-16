import { ArticleInputDTO, ArticleOutputDTO } from '#articles/article.types.js';
import { FindOptions } from '#types/options.type.js';
import { Article } from '@prisma/client';

export interface IArticleRepository {
  count: (keyword: string) => Promise<number>;
  findMany: (options: FindOptions) => Promise<ArticleOutputDTO[]>;
  findById: (id: string) => Promise<ArticleOutputDTO> | null;
  create: (data: ArticleInputDTO) => Promise<Article>;
  update: (id: string, data: Partial<ArticleInputDTO>) => Promise<Article>;
  delete: (id: string) => Promise<Article>;
  like: (articleId: string, userId: string) => Promise<Article>;
  unlike: (articleId: string, userId: string) => Promise<Article>;
}
