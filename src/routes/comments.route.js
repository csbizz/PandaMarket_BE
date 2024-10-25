import express from 'express';
import { commentController as postgresCommentController } from '../postgresql/containers/comment.container.js';

export const commentRouter = express.Router();

// patch API
commentRouter.patch('/:id', postgresCommentController.patchComment);

// delete API
commentRouter.delete('/:id', postgresCommentController.deleteComment);

export default commentRouter;
