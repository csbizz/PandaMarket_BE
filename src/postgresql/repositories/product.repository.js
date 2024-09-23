export class ProductRepository {
  constructor(client) {
    this.repo = client.product;
  }

  count = async (keyword) => {
    const searchOption = keyword
      ? { where: { productSearchQuery: { contains: keyword } } }
      : {};

    return await this.repo.count(searchOption);
  };

  findMany = async ({ orderBy, page, pageSize, keyword }) => {
    const sortOption = {
      orderBy: { createdAt: orderBy === 'recent' ? 'desc' : 'asc' },
    };
    const searchOption = keyword
      ? { where: { searchQuery: { contains: keyword } } }
      : {};

    return await this.repo.findMany({
      ...searchOption,
      ...sortOption,
      take: pageSize,
      skip: page,
    });
  };

  findById = async (id) => {
    return this.repo.findUnique({
      where: {
        id,
      },
    });
  };

  create = async (data) => {
    return await this.repo.create({
      data,
    });
  };

  update = async (id, data) => {
    return await this.repo.update({
      where: { id },
      data,
    });
  };

  deleteById = async (id) => {
    return await this.repo.delete({
      where: { id },
    });
  };
}
