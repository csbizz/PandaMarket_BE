export class ArticleService {
  constructor(articleDB) {
    this.db = articleDB;
  }

  getArticlesAndCount = async ({ orderBy, page, pageSize, keyword }) => {
    const totalCount = await this.db.count(keyword);

    const list = await this.db.findMany({
      orderBy,
      page,
      pageSize,
      keyword,
    });

    return { totalCount, list };
  };

  getArticleById = async (id) => {
    return await this.db.findById(id);
  };

  postArticle = async (body) => {
    return await this.db.create(body);
  };

  patchArticleById = async (id, body) => {
    let product = await this.db.findById(id);
    if (!product) return;

    Object.keys(body).forEach((k) => {
      product[k] = body[k];
    });
    return await this.db.update(id, product);
  };

  deleteArticleById = async (id) => {
    return await this.db.deleteById(id);
  };
}
