import { AccessTokenGuard } from '#auth/guards/access-token.guard.js';
import { CommentService } from '#comments/comment.service.js';
import { CommentInputDTO } from '#comments/comment.types.js';
import { ICommentController } from '#comments/interfaces/comment.controller.interface.js';
import { UuidValidationPipe } from '#global/pipes/uuid.validation.pipe.js';
import { Body, Controller, Delete, Param, Patch, Put, UseGuards } from '@nestjs/common';

@Controller('comments')
export class CommentController implements ICommentController {
  constructor(private readonly commentService: CommentService) {}

  @Patch(':id')
  @UseGuards(AccessTokenGuard)
  async patchComment(@Param('id', UuidValidationPipe) id: string, @Body('content') content: string) {
    const comment = await this.commentService.patchComment(id, content);

    return comment;
  }

  @Put(':id')
  @UseGuards(AccessTokenGuard)
  async putComment(@Param('id', UuidValidationPipe) id: string, @Body() body: CommentInputDTO) {
    const comment = await this.commentService.putComment(id, body);

    return comment;
  }

  @Delete(':id')
  @UseGuards(AccessTokenGuard)
  async deleteComment(@Param('id', UuidValidationPipe) id: string) {
    const comment = await this.commentService.deleteComment(id);

    return comment;
  }
}
