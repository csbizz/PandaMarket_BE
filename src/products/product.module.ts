import { AuthModule } from '#auth/auth.module.js';
import { CommentModule } from '#comments/comment.module.js';
import { DBModule } from '#global/db.module.js';
import { ProductController } from '#products/product.controller.js';
import { ProductRepository } from '#products/product.repository.js';
import { ProductService } from '#products/product.service.js';
import { Module } from '@nestjs/common';

@Module({
  imports: [DBModule, AuthModule, CommentModule],
  controllers: [ProductController],
  providers: [ProductRepository, ProductService],
  exports: [],
})
export class ProductModule {}
