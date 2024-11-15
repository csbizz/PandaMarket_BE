import express from 'express';
import { verifyAccessToken } from '../middlewares/auth.js';
import postgresArticleController from '../postgresql/containers/article.container.js';
import postgresCommentController from '../postgresql/containers/comment.container.js';

export const articleRouter = express.Router();

articleRouter
  .route('/')
  .get(postgresArticleController.getArticles)
  .post(verifyAccessToken, postgresArticleController.postArticle);

articleRouter
  .route('/:id')
  .get(postgresArticleController.getArticleById)
  .patch(verifyAccessToken, postgresArticleController.patchArticle)
  .delete(verifyAccessToken, postgresArticleController.deleteArticle);

articleRouter
  .route('/:id/comments')
  .get(postgresCommentController.getCommentsOfArticle)
  .post(verifyAccessToken, postgresCommentController.postCommentOfArticle);

export default articleRouter;
