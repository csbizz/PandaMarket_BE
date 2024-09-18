import { products, users, articles, comments } from './mock.js';
import { mongodbConnection } from '../src/mongodb/db/mongodb.connection.js';
import { ProductModel } from '../src/mongodb/models/product.model.js';
import { prismaClient as prisma } from '../src/postgresql/db/postgres.connection.js';

const Product = new ProductModel(mongodbConnection);

async function main() {
  // postgres seeding part
  await prisma.user.deleteMany();
  await prisma.user.createMany({
    data: users,
    skipDuplicates: true,
  });
  await prisma.product.deleteMany();
  await prisma.product.createMany({
    data: products,
    skipDuplicates: true,
  });
  await prisma.article.deleteMany();
  await prisma.article.createMany({
    data: articles,
    skipDuplicates: true,
  });
  await prisma.comment.deleteMany();
  await prisma.comment.createMany({
    data: comments,
    skipDuplicates: true,
  });
  // mongodb seeding part
  await Product.deleteMany({}); // 인자로 삭제 조건을 전달
  await Product.insertMany(products); // 인자로 삽입할 데이터를 전달
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
