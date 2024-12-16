import { AuthModule } from '#auth/auth.module.js';
import { CommentController } from '#comments/comment.controller.js';
import { CommentRepository } from '#comments/comment.repository.js';
import { CommentService } from '#comments/comment.service.js';
import { DBModule } from '#global/db.module.js';
import { Module } from '@nestjs/common';

@Module({
  imports: [DBModule, AuthModule],
  controllers: [CommentController],
  providers: [CommentService, CommentRepository],
  exports: [CommentService],
})
export class CommentModule {}
