import mongoose from 'mongoose';
import AutoIncSetter from '../autoIncSetter.js';

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 10
    },
    description: { type: String, minLength: 10, maxLength: 100 },
    price: { type: Number, required: true, min: 0 },
    tags: { type: [String] },
    images: { type: [String] },
    ownerId: { type: Number },
    favoriteCount: { type: Number, default: 0, min: 0 }
  },
  {
    timestamps: true
  }
);

// 숫자형 id 필드 생성
AutoIncSetter(ProductSchema, mongoose, 'PandaMarket', 'seq');
// model의 첫번째 인자: 대문자 시작, 단수형 - Product
// model이 다루게 될 컬렉션: 소문자 시작, 복수형 - products
const Product = mongoose.model('Product', ProductSchema);

export default Product;
