import express from 'express';
import validateProduct from '../middlewares/product.validation.js';
import postgresCommentController from '../postgresql/containers/comment.container.js';
import postgresProductController from '../postgresql/containers/product.container.js';
// import { productController as mongocbProductController } from '../mongodb/containers/product.container.js';

export const productRouter = express.Router();

// mongoDB (deprecated)
// productRouter.route('/').get(mongodbProductController.getProducts).post(mongodbProductController.postProduct);
// productRouter
//   .route('/:id')
//   .get(mongodbProductController.getProductById)
//   .patch(mongodbProductController.patchProduct)
//   .delete(mongodbProductController.deleteProduct);

// postgreSQL
productRouter.route('/').get(postgresProductController.getProducts).post(validateProduct, postgresProductController.postProduct);
productRouter
  .route('/:id')
  .get(postgresProductController.getProductById)
  .patch(validateProduct, postgresProductController.patchProduct)
  .delete(postgresProductController.deleteProduct);
productRouter
  .route('/:id/comments')
  .get(postgresCommentController.getCommentsOfProduct)
  .post(postgresCommentController.postCommentOfProduct);
productRouter.route('/:id/like').post().delete();

export default productRouter;
