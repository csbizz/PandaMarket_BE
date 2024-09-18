import { products, users, articles, comments } from './mock.js';
import { mongodbConnection } from '../src/mongodb/db/mongodb.connection.js';
import { ProductModel } from '../src/mongodb/models/product.model.js';
import { prismaClient as prisma } from '../src/postgresql/db/postgres.connection.js';

function getRandomInteger(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  const diff = maxFloored - minCeiled;
  const rand = Math.random();

  return Math.floor(rand * (diff + 1) + minCeiled);
}

const Product = new ProductModel(mongodbConnection);

async function main() {
  // postgres seeding part
  // delete part
  await prisma.$transaction([
    prisma.user.deleteMany(),
    prisma.product.deleteMany(),
    prisma.article.deleteMany(),
    prisma.comment.deleteMany(),
  ]);
  // create part
  // 관계형이 아닌 데이터부터 처리
  await prisma.$transaction([
    prisma.user.createMany({
      data: users,
      skipDuplicates: true,
    }),
    prisma.product.createMany({
      data: products,
      skipDuplicates: true,
    }),
  ]);
  // 관계형 데이터 처리
  const userIds = (await prisma.user.findMany()).map((u) => u.id);
  const newArticles = articles.map((article) => {
    return {
      ...article,
      ownerId: userIds[getRandomInteger(0, userIds.length - 1)],
    };
  });

  await prisma.article.createMany({
    data: newArticles,
    skipDuplicates: true,
  });
  // await prisma.comment.createMany({
  //   data: comments,
  //   skipDuplicates: true,
  // });

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
