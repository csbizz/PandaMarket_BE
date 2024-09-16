import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { MESSAGES } from './constants.js';
import { productController } from './mongodb/containers/product.container.js';
import { asyncHandler } from './mongodb/utils/async-handler.js';

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
app.listen(process.env.PORT || 3000, () => console.log('Server Started'));

// get API
app.get('/products', asyncHandler(productController.getProducts));

// get :id API
app.get('/products/:id', asyncHandler(productController.getProductById));

// post API
app.post('/products/', asyncHandler(productController.postProduct));

// patch API
app.patch('/products/:id', asyncHandler(productController.patchProductById));

// delete API
app.delete('/products/:id', asyncHandler(productController.deleteProductById));
