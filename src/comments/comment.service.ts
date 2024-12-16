import { CommentNotFoundException } from '#comments/comment.exception.js';
import { CommentRepository } from '#comments/comment.repository.js';
import { CommentInputDTO } from '#comments/comment.types.js';
import { ICommentService } from '#comments/interfaces/comment.service.interface.js';
import { ForbiddenException } from '#exceptions/http.exception.js';
import { IStorage } from '#types/common.types.js';
import { CommentFindOptions } from '#types/options.type.js';
import { Injectable } from '@nestjs/common';
import { AsyncLocalStorage } from 'async_hooks';

@Injectable()
export class CommentService implements ICommentService {
  constructor(
    private readonly commentRepository: CommentRepository,
    private readonly als: AsyncLocalStorage<IStorage>,
  ) {}

  async getAllComments() {
    const comments = await this.commentRepository.findAll();

    return comments;
  }

  async getComments({ id, limit, cursor, type }: CommentFindOptions) {
    const comments = await this.commentRepository.findMany({
      id,
      limit,
      cursor,
      type,
    });

    return comments;
  }

  async postComment(data: Omit<CommentInputDTO, 'ownerId'>) {
    const { userId } = this.als.getStore();

    const comment = await this.commentRepository.create({ ...data, ownerId: userId });

    return comment;
  }

  async patchComment(id: string, content: string) {
    const target = await this.commentRepository.findById(id);
    if (!target) throw new CommentNotFoundException();

    const { userId } = this.als.getStore();
    if (target.ownerId !== userId) throw new ForbiddenException();

    const comment = await this.commentRepository.update(id, { content });

    return comment;
  }

  async putComment(id: string, data: CommentInputDTO) {
    const target = await this.commentRepository.findById(id);
    if (!target) throw new CommentNotFoundException();

    const { userId } = this.als.getStore();
    if (target.ownerId !== userId) throw new ForbiddenException();

    const comment = await this.commentRepository.update(id, data);

    return comment;
  }

  async deleteComment(id: string) {
    const target = await this.commentRepository.findById(id);
    if (!target) throw new CommentNotFoundException();

    const { userId } = this.als.getStore();
    if (target.ownerId !== userId) throw new ForbiddenException();

    const comment = await this.commentRepository.delete(id);

    return comment;
  }
}
