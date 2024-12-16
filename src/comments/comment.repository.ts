import { CommentInputDTO } from '#comments/comment.types.js';
import { ICommentRepository } from '#comments/interfaces/comment.repository.interface.js';
import { BadRequestException } from '#exceptions/http.exception.js';
import { PrismaService } from '#global/prisma.service.js';
import { CursorCondition } from '#types/conditions.type.js';
import { CommentFindOptions, CommentType } from '#types/options.type.js';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class CommentRepository implements ICommentRepository {
  private readonly comment;
  constructor(private readonly prisma: PrismaService) {
    this.comment = prisma.comment;
  }

  async findAll() {
    const comments = await this.comment.findMany({ orderBy: { createdAt: Prisma.SortOrder.desc } });

    return comments;
  }

  async findMany({ id, limit, cursor, type }: CommentFindOptions) {
    let typeOption;
    switch (type) {
      case CommentType.Article:
        typeOption = { articleId: id };
        break;
      case CommentType.Product:
        typeOption = { productId: id };
        break;
      default:
        throw new BadRequestException();
    }
    const pageOption: CursorCondition = cursor ? { skip: 1, cursor: { id: cursor } } : {};

    const comments = await this.comment.findMany({
      where: typeOption,
      orderBy: { createdAt: Prisma.SortOrder.desc },
      take: limit,
      include: {
        owner: {
          select: {
            nickname: true,
          },
        },
      },
      ...pageOption,
    });
    const nextCursor = comments.length ? { nextCursor: comments.at(-1)?.id } : {};

    return { ...nextCursor, list: comments };
  }

  async findById(id: string) {
    const comment = await this.comment.findUnique({ where: { id } });

    return comment;
  }

  async create(data: CommentInputDTO) {
    const comment = await this.comment.create({ data });

    return comment;
  }

  async update(id: string, data: { content: string }) {
    const comment = await this.comment.update({ where: { id }, data });

    return comment;
  }

  async delete(id: string) {
    const comment = await this.comment.delete({ where: { id } });

    return comment;
  }
}
