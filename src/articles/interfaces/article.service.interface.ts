import { ArticleInputDTO, ArticleOutputDTO } from '#articles/article.types.js';
import { FindOptions } from '#types/options.type.js';
import { Article } from '@prisma/client';

export interface IArticleService {
  getArticles: (options: FindOptions) => Promise<{ totalCount: number; list: ArticleOutputDTO[] }>;
  getArticle: (id: string) => Promise<ArticleOutputDTO>;
  postArticle: (body: ArticleInputDTO) => Promise<Article>;
  patchArticle: (id: string, body: Partial<ArticleInputDTO>) => Promise<Article>;
  deleteArticle: (id: string) => Promise<Article>;
  postArticleLike: (articleId: string) => Promise<Article & { isLiked: boolean }>;
  deleteArticleLike: (articleId: string) => Promise<Article & { isLiked: boolean }>;
}
