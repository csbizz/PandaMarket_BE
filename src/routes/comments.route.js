import express from 'express';
import { commentController as postgresCommentController } from '../postgresql/containers/comment.container.js';

export const commentRouter = express.Router();

commentRouter
  .route('/:id')
  .patch(postgresCommentController.patchComment)
  .put(postgresCommentController.putComment)
  .delete(postgresCommentController.deleteComment);

export default commentRouter;
