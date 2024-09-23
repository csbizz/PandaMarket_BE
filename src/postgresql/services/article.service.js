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
    const article = await this.db.findById(id);

    return article;
  };

  postArticle = async (body) => {
    const article = await this.db.create(body);

    return article;
  };

  patchArticleById = async (id, body) => {
    const article = await this.db.findById(id);
    if (!article) return;

    Object.keys(body).forEach((k) => {
      article[k] = body[k];
    });

    const updated = await this.db.update(id, article);

    return updated;
  };

  deleteArticleById = async (id) => {
    const article = await this.db.deleteById(id);

    return article;
  };
}
