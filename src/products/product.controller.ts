import { AccessTokenGuard } from '#auth/guards/access-token.guard.js';
import { CommentService } from '#comments/comment.service.js';
import { UuidValidationPipe } from '#global/pipes/uuid.validation.pipe.js';
import { IProductController } from '#products/interfaces/product.controller.interface.js';
import { ProductService } from '#products/product.service.js';
import { ProductInputDTO } from '#products/product.types.js';
import { IStorage } from '#types/common.types.js';
import { CommentType, CursorPaginationOptions, FindOptions, SortOrder } from '#types/options.type.js';
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
  async getProductById(@Param('id', UuidValidationPipe) id: string) {
    const product = await this.productService.getProduct(id);
    // console.log('🚀 ~ ProductController ~ getProductById ~ product:', product);

    return product;
  }

  @Get(':id/comments')
  async getComments(@Param('id', UuidValidationPipe) id: string, @Query() query: CursorPaginationOptions) {
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
  async postComment(@Param('id', UuidValidationPipe) id: string, @Body('content') content: string) {
    const data = { content, articleId: null, productId: id };
    const comment = await this.commentService.postComment(data);

    return comment;
  }

  @Patch(':id')
  @UseGuards(AccessTokenGuard)
  async patchProduct(@Param('id', UuidValidationPipe) id: string, @Body() body: Partial<ProductInputDTO>) {
    const product = await this.productService.patchProduct(id, body);

    return product;
  }

  @Delete(':id')
  @UseGuards(AccessTokenGuard)
  async deleteProduct(@Param('id', UuidValidationPipe) id: string) {
    const product = await this.productService.deleteProduct(id);

    return product;
  }

  @Post(':id/like')
  @UseGuards(AccessTokenGuard)
  async postProductLike(@Param('id', UuidValidationPipe) id: string) {
    const product = await this.productService.postProductLike(id);

    return product;
  }

  @Delete(':id/like')
  @UseGuards(AccessTokenGuard)
  async deleteProductLike(@Param('id', UuidValidationPipe) id: string) {
    const product = await this.productService.deleteProductLike(id);

    return product;
  }
}
