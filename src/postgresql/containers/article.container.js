import { prismaClient } from '../db/postgres.connection.js';
import { ArticleRepository } from '../repositories/article.repository.js';
import { ArticleService } from '../services/article.service.js';
import { ArticleController } from '../controllers/article.controller.js';

const articleModel = new ArticleRepository(prismaClient);
const articleService = new ArticleService(articleModel);
const articleController = new ArticleController(articleService);

export { articleController };
