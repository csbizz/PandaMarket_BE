export class ArticleRepository {
  constructor(client) {
    this.repo = client.article;
  }

  count = async (keyword) => {
    const searchOption = keyword
      ? { where: { productSearchQuery: { contains: keyword } } }
      : {};

    return await this.repo.count(searchOption);
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
