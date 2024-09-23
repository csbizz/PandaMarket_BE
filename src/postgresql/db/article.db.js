export class ArticleDB {
  constructor(client) {
    this.db = client.article;
  }

  count = async (keyword) => {
    const searchOption = keyword
      ? { where: { productSearchQuery: { contains: keyword } } }
      : {};

    return await this.db.count(searchOption);
  };

  findMany = async ({ orderBy, page, pageSize, keyword }) => {
    let sortOption;
    switch (orderBy) {
      case 'like':
        sortOption = { orderBy: { like: 'desc' } };
        break;
      case 'recent':
      default:
        sortOption = { orderBy: { createdAt: 'desc' } };
    }

    const searchOption = keyword
      ? { where: { searchQuery: { contains: keyword } } }
      : {};

    return await this.db.findMany({
      ...searchOption,
      ...sortOption,
      take: pageSize,
      skip: page,
    });
  };

  findById = async (id) => {
    return this.db.findUnique({
      where: {
        id,
      },
    });
  };

  create = async (data) => {
    return await this.db.create({
      data,
    });
  };

  update = async (id, data) => {
    return await this.db.update({
      where: { id },
      data,
    });
  };

  deleteById = async (id) => {
    return await this.db.delete({
      where: { id },
    });
  };
}
