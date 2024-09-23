import { prismaClient } from '../db/postgres.connection.js';
import { CommentRepository } from '../repositories/comment.repository.js';
import { CommentService } from '../services/comment.service.js';
import { CommentController } from '../controllers/comment.controller.js';

const commentModel = new CommentRepository(prismaClient);
const commentService = new CommentService(commentModel);
const commentController = new CommentController(commentService);

export { commentController };
