import express from 'express';
import { articleController as postgresArticleController } from '../postgresql/containers/article.container.js';
import { commentController as postgresCommentController } from '../postgresql/containers/comment.container.js';

export const articleRouter = express.Router();

// get API
articleRouter.get('/', postgresArticleController.getArticles);

// get :id API
articleRouter.get('/:id', postgresArticleController.getArticleById);

// get :id/comments API
articleRouter.get('/:id/comments', postgresCommentController.getCommentsOfArticle);

// post API
articleRouter.post('/', postgresArticleController.postArticle);

// post :id/comments API
articleRouter.post('/:id/comments', postgresCommentController.postCommentOfArticle);

// patch API
articleRouter.patch('/:id', postgresArticleController.patchArticle);

// delete API
articleRouter.delete('/:id', postgresArticleController.deleteArticle);

export default articleRouter;
