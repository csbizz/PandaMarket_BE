import { ArticleNotFoundException } from '#articles/article.exception.js';
import { ArticleRepository } from '#articles/article.repository.js';
import { ArticleInputDTO } from '#articles/article.types.js';
import { IArticleService } from '#articles/interfaces/article.service.interface.js';
import { ForbiddenException } from '#exceptions/http.exception.js';
import { IStorage } from '#types/common.types.js';
import { FindOptions } from '#types/options.type.js';
import { Injectable } from '@nestjs/common';
import { AsyncLocalStorage } from 'async_hooks';

@Injectable()
export class ArticleService implements IArticleService {
  constructor(
    private readonly articleRepository: ArticleRepository,
    private readonly als: AsyncLocalStorage<IStorage>,
  ) {}

  async getArticles({ orderBy, page, pageSize, keyword }: FindOptions) {
    const totalCount = await this.articleRepository.count(keyword);

    const list = await this.articleRepository.findMany({
      orderBy,
      page,
      pageSize,
      keyword,
    });

    return { totalCount, list };
  }

  async getArticle(id: string) {
    const article = await this.articleRepository.findById(id);
    if (!article) throw new ArticleNotFoundException();

    return article;
  }

  async postArticle(body: ArticleInputDTO) {
    const { userId } = this.als.getStore();

    const article = await this.articleRepository.create({ ...body, ownerId: userId });

    return article;
  }

  async patchArticle(id: string, body: Partial<ArticleInputDTO>) {
    const target = await this.articleRepository.findById(id);
    if (!target) throw new ArticleNotFoundException();

    const { userId } = this.als.getStore();
    if (target.ownerId !== userId) throw new ForbiddenException();

    const updated = await this.articleRepository.update(id, body);

    return updated;
  }

  async deleteArticle(id: string) {
    const target = await this.articleRepository.findById(id);
    if (!target) throw new ArticleNotFoundException();

    const { userId } = this.als.getStore();
    if (target.ownerId !== userId) throw new ForbiddenException();

    const article = await this.articleRepository.delete(id);

    return article;
  }

  async postArticleLike(articleId: string) {
    const target = await this.articleRepository.findById(articleId);
    if (!target) throw new ArticleNotFoundException();

    const { userId } = this.als.getStore();
    if (target.ownerId !== userId) throw new ForbiddenException();

    const article = await this.articleRepository.like(articleId, userId);

    return { ...article, isLiked: true };
  }

  async deleteArticleLike(articleId: string) {
    const target = await this.articleRepository.findById(articleId);
    if (!target) throw new ArticleNotFoundException();

    const { userId } = this.als.getStore();
    if (target.ownerId !== userId) throw new ForbiddenException();

    const article = await this.articleRepository.unlike(articleId, userId);

    return { ...article, isLiked: false };
  }
}
