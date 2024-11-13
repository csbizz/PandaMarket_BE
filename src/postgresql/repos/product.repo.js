export class ProductRepo {
  constructor(client) {
    this.product = client.product;
    this.productTag = client.productTag;
  }

  count = async keyword => {
    const searchOption = keyword
      ? {
          where: {
            OR: [{ name: { contains: keyword } }, { description: { contains: keyword } }],
          },
        }
      : {};

    const count = await this.product.count(searchOption);

    return count;
  };

  findMany = async ({ orderBy, page, pageSize, keyword }) => {
    let sortOption;
    switch (orderBy) {
      case 'like':
        sortOption = { orderBy: { likeCount: 'desc' } };
        break;
      case 'recent':
      default:
        sortOption = { orderBy: { createdAt: 'desc' } };
    }

    const searchOption = keyword
      ? {
          where: {
            OR: [{ name: { contains: keyword } }, { description: { contains: keyword } }],
          },
        }
      : {};

    const products = await this.product.findMany({
      ...searchOption,
      ...sortOption,
      take: pageSize,
      skip: (page - 1) * pageSize,
    });

    return products;
  };

  findById = async id => {
    const product = await this.product.findUnique({
      where: { id },
      include: {
        productTags: { select: { tag: true } },
        owner: { select: { nickname: true } },
      },
    });

    return product;
  };

  create = async body => {
    const { tags, images, ...data } = body;
    const product = await this.product.create({ data });
    const newTags = tags.map(tag => ({ tag, productId: product.id }));
    await this.productTag.createMany({
      data: newTags,
      skipDuplicates: true,
    });

    return product;
  };

  update = async (id, body) => {
    const { tags, images, ...data } = body;
    const product = await this.product.update({
      where: { id },
      data: {
        ...data,
        productTags: {
          deleteMany: {},
          create: tags.map(tag => ({ tag })),
        },
      },
    });

    return product;
  };

  deleteById = async id => {
    const product = await this.product.delete({ where: { id } });

    return product;
  };
}
