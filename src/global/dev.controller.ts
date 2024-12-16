import { CommentService } from '#comments/comment.service.js';
import { TestException } from '#exceptions/test.exception.js';
import { FindOptions } from '#types/options.type.js';
import { UserService } from '#users/user.service.js';
import { Controller, Get, Query } from '@nestjs/common';

@Controller('dev')
export class DevController {
  constructor(
    private readonly userService: UserService,
    private readonly commentService: CommentService,
  ) {}

  @Get('error')
  error() {
    throw new TestException();
  }

  @Get('users')
  async getUsers(@Query() query: FindOptions) {
    const { orderBy = 'recent', page = 1, pageSize = 10, keyword = '' } = query;

    const users = await this.userService.getUsers({
      orderBy,
      page,
      pageSize,
      keyword,
    });

    return users;
  }

  @Get('comments')
  async getAllComments() {
    const comments = await this.commentService.getAllComments();

    return comments;
  }
}
