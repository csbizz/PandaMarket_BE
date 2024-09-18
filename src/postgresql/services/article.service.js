export class ArticleService {
  constructor(articleModel) {
    this.model = articleModel;
  }

  getArticlesAndCount = async ({ orderBy, page, pageSize, keyword }) => {
    const totalCount = await this.model.count(keyword);

    const list = await this.model.findMany({
      orderBy,
      page,
      pageSize,
      keyword,
    });

    return { totalCount, list };
  };
}
