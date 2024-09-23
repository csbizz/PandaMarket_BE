export class UserRepository {
  constructor(client) {
    this.repo = client.user;
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
}
