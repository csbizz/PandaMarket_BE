import data from './mock.js';
import { mongodbConnection } from '../src/mongodb/db/mongodb.connection.js';
import { ProductModel } from '../src/mongodb/models/product.model.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const Product = new ProductModel(mongodbConnection);

async function main() {
  // postgres seeding part
  await prisma.product.deleteMany();
  await prisma.product.createMany({
    data,
    skipDuplicates: true,
  });
  // mongodb seeding part
  await Product.deleteMany({}); // 인자로 삭제 조건을 전달
  await Product.insertMany(data); // 인자로 삽입할 데이터를 전달
}

main()
  .then(async () => {
    await prisma.$disconnect();
    await mongodbConnection.close();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    await mongodbConnection.close();
    process.exit(1);
  });
