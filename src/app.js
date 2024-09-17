import express from 'express';
import cors from 'cors';
// import { asyncHandler as mongodbAsyncHandler } from './mongodb/utils/async-handler.js';
// import { productController as mongodbProductController } from './mongodb/containers/product.container.js';
import { PrismaClient } from '@prisma/client';
import { asyncHandler as postgresAsyncHandler } from './postgresql/utils/async-handler.js';

const app = express();
app.use(cors());
app.use(express.json());
app.listen(process.env.PORT || 3000, () => console.log('Server Started'));

const prisma = new PrismaClient();

// get API
// app.get('/products', mongodbAsyncHandler(mongodbProductController.getProducts));
app.get(
  '/products',
  postgresAsyncHandler(async (req, res) => {
    const orderBy = req.query.orderBy || 'recent';
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 10;
    const keyword = req.query.keyword || '';

    // const sortOption = { createdAt: orderBy === 'recent' ? 'desc' : 'asc' };
    const sortOption = {
      orderBy: { createdAt: orderBy === 'recent' ? 'desc' : 'asc' },
    };
    const searchOption = keyword
      ? { where: { searchQuery: { contains: keyword } } }
      : {};

    const count = await prisma.product.count(searchOption);
    const products = await prisma.product.findMany({
      ...searchOption,
      ...sortOption,
      take: pageSize,
      skip: page,
    });

    res.json({ list: products, totalCount: count });
  })
);

// // get :id API
// app.get(
//   '/products/:id',
//   mongodbAsyncHandler(mongodbProductController.getProductById)
// );

// // post API
// app.post(
//   '/products/',
//   mongodbAsyncHandler(mongodbProductController.postProduct)
// );

// // patch API
// app.patch(
//   '/products/:id',
//   mongodbAsyncHandler(mongodbProductController.patchProductById)
// );

// // delete API
// app.delete(
//   '/products/:id',
//   mongodbAsyncHandler(mongodbProductController.deleteProductById)
// );
