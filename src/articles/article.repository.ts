import { ArticleInputDTO } from '#articles/article.types.js';
import { IArticleRepository } from '#articles/interfaces/article.repository.interface.js';
import { PrismaService } from '#global/prisma.service.js';
import { OrderByCondition, WhereCondition } from '#types/conditions.type.js';
import { FindOptions, SortOrder } from '#types/options.type.js';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class ArticleRepository implements IArticleRepository {
  private readonly article;
  constructor(private readonly prisma: PrismaService) {
    this.article = prisma.article;
  }

  async count(keyword: string) {
    const searchOption: WhereCondition = keyword
      ? {
          where: {
            OR: [{ title: { contains: keyword } }, { content: { contains: keyword } }],
          },
        }
      : {};

    const count = await this.article.count(searchOption);

    return count;
  }

  async findMany({ orderBy, page, pageSize, keyword }: FindOptions) {
    let sortOption: OrderByCondition;
    switch (orderBy) {
      case SortOrder.Like:
        sortOption = { orderBy: { likeCount: Prisma.SortOrder.desc } };
        break;
      case SortOrder.Recent:
      default:
        sortOption = { orderBy: { createdAt: Prisma.SortOrder.desc } };
    }

    const searchOption: WhereCondition = keyword ? { where: { title: { contains: keyword } } } : {};

    const articles = await this.article.findMany({
      ...searchOption,
      ...sortOption,
      take: pageSize,
      skip: (page - 1) * pageSize,
      include: {
        owner: {
          select: {
            nickname: true,
          },
        },
      },
    });

    return articles;
  }

  async findById(id: string) {
    const article = await this.article.findUnique({
      where: { id },
      include: {
        owner: {
          select: {
            nickname: true,
          },
        },
      },
    });

    return article;
  }

  async create(data: ArticleInputDTO) {
    const article = await this.article.create({ data });

    return article;
  }

  async update(id: string, data: Partial<ArticleInputDTO>) {
    const article = await this.article.update({ where: { id }, data });

    return article;
  }

  async delete(id: string) {
    const article = await this.article.delete({ where: { id } });

    return article;
  }

  async like(articleId: string, userId: string) {
    const article = await this.article.update({
      where: { id: articleId },
      data: {
        likeUsers: { connect: { id: userId } },
        likeCount: { increment: 1 },
      },
    });

    return article;
  }

  async unlike(articleId: string, userId: string) {
    const article = await this.article.update({
      where: { id: articleId },
      data: {
        likeUsers: { disconnect: { id: userId } },
        likeCount: { decrement: 1 },
      },
    });

    return article;
  }
}
