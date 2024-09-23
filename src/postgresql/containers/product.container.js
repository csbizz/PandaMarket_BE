import { prismaClient } from '../db/postgres.connection.js';
import { ProductRepository } from '../repositories/product.repository.js';
import { ProductService } from '../services/product.service.js';
import { ProductController } from '../controllers/product.controller.js';

const productModel = new ProductRepository(prismaClient);
const productService = new ProductService(productModel);
const productController = new ProductController(productService);

export { productController };
