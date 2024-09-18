import express from 'express';
import cors from 'cors';
// import { asyncHandler as mongodbAsyncHandler } from './mongodb/utils/async-handler.js';
// import { productController as mongodbProductController } from './mongodb/containers/product.container.js';
import { asyncHandler as postgresAsyncHandler } from './postgresql/utils/async-handler.js';
import { productController as postgresProductController } from './postgresql/containers/product.container.js';
import { articleController as postgresArticleController } from './postgresql/containers/article.container.js';
import { userController as postgresUserController } from './postgresql/containers/user.container.js';

const app = express();
app.use(cors());
app.use(express.json());
app.listen(process.env.PORT || 3000, () => console.log('Server Started'));

/***************************    FOR_DEV  **************************************************/

app.get('/dev/users', postgresAsyncHandler(postgresUserController.getUsers));

/***************************    PRODUCTS  **************************************************/

// get API
// app.get('/products', mongodbAsyncHandler(mongodbProductController.getProducts));
app.get(
  '/products',
  postgresAsyncHandler(postgresProductController.getProducts)
);

// // get :id API
// app.get(
//   '/products/:id',
//   mongodbAsyncHandler(mongodbProductController.getProductById)
// );
app.get(
  '/products/:id',
  postgresAsyncHandler(postgresProductController.getProductById)
);

// // post API
// app.post(
//   '/products/',
//   mongodbAsyncHandler(mongodbProductController.postProduct)
// );
app.post(
  '/products/',
  postgresAsyncHandler(postgresProductController.postProduct)
);

// // patch API
// app.patch(
//   '/products/:id',
//   mongodbAsyncHandler(mongodbProductController.patchProductById)
// );
app.patch(
  '/products/:id',
  postgresAsyncHandler(postgresProductController.patchProductById)
);

// // delete API
// app.delete(
//   '/products/:id',
//   mongodbAsyncHandler(mongodbProductController.deleteProductById)
// );
app.delete(
  '/products/:id',
  postgresAsyncHandler(postgresProductController.deleteProductById)
);

/***************************    ARTICLE  **************************************************/

app.get(
  '/articles',
  postgresAsyncHandler(postgresArticleController.getArticles)
);
