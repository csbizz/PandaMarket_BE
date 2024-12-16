import { ArticleService } from '#articles/article.service.js';
import { ArticleInputDTO } from '#articles/article.types.js';
import { IArticleController } from '#articles/interfaces/article.controller.interface.js';
import { AccessTokenGuard } from '#auth/guards/access-token.guard.js';
import { CommentService } from '#comments/comment.service.js';
import { CommentType, CursorPaginationOptions, FindOptions, SortOrder } from '#types/options.type.js';
import assertUuid from '#utils/assertUuid.js';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';

@Controller('articles')
export class ArticleController implements IArticleController {
  constructor(
    private readonly articleService: ArticleService,
    private readonly commentService: CommentService,
  ) {}

  @Get()
  async getArticles(@Query() query: FindOptions) {
    const { orderBy = SortOrder.Recent, page = 1, pageSize = 10, keyword = '' } = query;

    const articles = await this.articleService.getArticles({
      orderBy,
      page,
      pageSize,
      keyword,
    });

    return articles;
  }

  @Get(':id')
  async getArticleById(@Param('id') id: string) {
    assertUuid(id);

    const article = await this.articleService.getArticle(id);

    return article;
  }

  @Get(':id/comments')
  async getComments(@Param('id') id: string, @Query() query: CursorPaginationOptions) {
    assertUuid(id);
    const { cursor, limit = 10 } = query;

    const comments = await this.commentService.getComments({ id, cursor, limit, type: CommentType.Article });

    return comments;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(AccessTokenGuard)
  async postArticle(@Body() body: ArticleInputDTO) {
    const article = await this.articleService.postArticle(body);

    return article;
  }

  @Post(':id/comments')
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(AccessTokenGuard)
  async postComment(@Param('id') id: string, @Body('content') content: string) {
    assertUuid(id);

    const data = { content, articleId: id, productId: null };
    const comment = await this.commentService.postComment(data);

    return comment;
  }

  @Patch(':id')
  @UseGuards(AccessTokenGuard)
  async patchArticle(@Param('id') id: string, @Body() body: Partial<ArticleInputDTO>) {
    assertUuid(id);

    const article = await this.articleService.patchArticle(id, body);

    return article;
  }

  @Delete(':id')
  @UseGuards(AccessTokenGuard)
  async deleteArticle(@Param('id') id: string) {
    assertUuid(id);

    const article = await this.articleService.deleteArticle(id);

    return article;
  }

  @Post(':id/like')
  @UseGuards(AccessTokenGuard)
  async postArticleLike(@Param('id') id: string) {
    assertUuid(id);

    const article = await this.articleService.postArticleLike(id);

    return article;
  }

  @Delete(':id/like')
  @UseGuards(AccessTokenGuard)
  async deleteArticleLike(@Param('id') id: string) {
    assertUuid(id);

    const article = await this.articleService.deleteArticleLike(id);

    return article;
  }
}
