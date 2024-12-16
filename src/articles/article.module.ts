import { ArticleController } from '#articles/article.controller.js';
import { ArticleRepository } from '#articles/article.repository.js';
import { ArticleService } from '#articles/article.service.js';
import { AuthModule } from '#auth/auth.module.js';
import { CommentModule } from '#comments/comment.module.js';
import { DBModule } from '#global/db.module.js';
import { Module } from '@nestjs/common';

@Module({
  imports: [DBModule, AuthModule, CommentModule],
  controllers: [ArticleController],
  providers: [ArticleService, ArticleRepository],
})
export class ArticleModule {}
