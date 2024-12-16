import { AccessTokenGuard } from '#auth/guards/access-token.guard.js';
import { CommentService } from '#comments/comment.service.js';
import { IProductController } from '#products/interfaces/product.controller.interface.js';
import { ProductService } from '#products/product.service.js';
import { ProductInputDTO } from '#products/product.types.js';
import { IStorage } from '#types/common.types.js';
import { CommentType, CursorPaginationOptions, FindOptions, SortOrder } from '#types/options.type.js';
import assertUuid from '#utils/assertUuid.js';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { AsyncLocalStorage } from 'async_hooks';

@Controller('products')
export class ProductController implements IProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly commentService: CommentService,
    private readonly als: AsyncLocalStorage<IStorage>,
  ) {}

  @Get()
  async getProducts(@Query() query: Partial<FindOptions>) {
    const { orderBy = SortOrder.Recent, page = 1, pageSize = 10, keyword = '' } = query;

    const products = await this.productService.getProducts({
      orderBy,
      page,
      pageSize,
      keyword,
    });

    return products;
  }

  @Get(':id')
  async getProductById(@Param('id') id: string) {
    assertUuid(id);
    const product = await this.productService.getProduct(id);

    return product;
  }

  @Get(':id/comments')
  async getComments(@Param('id') id: string, @Query() query: CursorPaginationOptions) {
    assertUuid(id);
    const { cursor, limit = 10 } = query;

    const options = { id, cursor, limit, type: CommentType.Product };
    const comments = await this.commentService.getComments(options);

    return comments;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(AccessTokenGuard)
  async postProduct(@Body() body: ProductInputDTO) {
    const product = await this.productService.postProduct(body);

    return product;
  }

  @Post(':id/comments')
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(AccessTokenGuard)
  async postComment(@Param('id') id: string, @Body('content') content: string) {
    assertUuid(id);

    const data = { content, articleId: null, productId: id };
    const comment = await this.commentService.postComment(data);

    return comment;
  }

  @Patch(':id')
  @UseGuards(AccessTokenGuard)
  async patchProduct(@Param('id') id: string, @Body() body: Partial<ProductInputDTO>) {
    assertUuid(id);
    const product = await this.productService.patchProduct(id, body);

    return product;
  }

  @Delete(':id')
  @UseGuards(AccessTokenGuard)
  async deleteProduct(@Param('id') id: string) {
    assertUuid(id);
    const product = await this.productService.deleteProduct(id);

    return product;
  }

  @Post(':id/like')
  @UseGuards(AccessTokenGuard)
  async postProductLike(@Param('id') id: string) {
    assertUuid(id);
    const product = await this.productService.postProductLike(id);

    return product;
  }

  @Delete(':id/like')
  @UseGuards(AccessTokenGuard)
  async deleteProductLike(@Param('id') id: string) {
    assertUuid(id);
    const product = await this.productService.deleteProductLike(id);

    return product;
  }
}
