export class ProductModel {
  constructor(client) {
    this.model = client.product;
  }

  count = async (keyword) => {
    const searchOption = keyword
      ? { where: { searchQuery: { contains: keyword } } }
      : {};

    return await this.model.count(searchOption);
  };

  findMany = async ({ orderBy, page, pageSize, keyword }) => {
    const sortOption = {
      orderBy: { createdAt: orderBy === 'recent' ? 'desc' : 'asc' },
    };
    const searchOption = keyword
      ? { where: { searchQuery: { contains: keyword } } }
      : {};

    return await this.model.findMany({
      ...searchOption,
      ...sortOption,
      take: pageSize,
      skip: page,
    });
  };
}
