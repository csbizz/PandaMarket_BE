import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import cors from 'cors';
import Product from './models/Product.js';

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log('Connected to DB'));
app.listen(process.env.PORT || 3000, () => console.log('Server Started'));

// handler를 인자로 받아서 오류처리 해주는 함수
function asyncHandler(handler) {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (e) {
      if (e.name === 'ValidationError') {
        res.status(400).send({ message: e.message });
      } else if (e.name === 'CastError') {
        res.status(404).send({ message: 'Cannot find given id.' });
      } else {
        res.status(500).send({ message: e.message });
      }
    }
  };
}

// get API
app.get(
  '/product',
  asyncHandler(async (req, res) => {
    const orderBy = req.query.orderBy || 'recent';
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 10;
    const keyword = req.query.keyword;

    const sortOption = { createdAt: orderBy === 'recent' ? 'asc' : 'desc' };
    const searchOption = keyword ? { $text: { $search: keyword } } : {};

    const products = await Product.find(searchOption)
      .sort(sortOption)
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    res.send(products);
  })
);
