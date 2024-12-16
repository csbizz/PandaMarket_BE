import { ArticleInputDTO, ArticleOutputDTO } from '#articles/article.types.js';
import { CursorPaginationOptions, FindOptions } from '#types/options.type.js';
import { Article, Comment } from '@prisma/client';

export interface IArticleController {
  getArticles: (query: FindOptions) => Promise<{ totalCount: number; list: ArticleOutputDTO[] }>;
  getArticleById: (id: string) => Promise<ArticleOutputDTO>;
  getComments: (id: string, query: CursorPaginationOptions) => Promise<{ nextCursor?: string; list: Comment[] }>;
  postArticle: (body: ArticleInputDTO) => Promise<Article>;
  postComment: (id: string, content: string) => Promise<Comment>;
  patchArticle: (id: string, body: Partial<ArticleInputDTO>) => Promise<Article>;
  deleteArticle: (id: string) => Promise<Article>;
  postArticleLike: (id: string) => Promise<Article & { isLiked: boolean }>;
  deleteArticleLike: (id: string) => Promise<Article & { isLiked: boolean }>;
}
