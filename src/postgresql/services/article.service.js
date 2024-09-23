export class ArticleService {
  constructor(articleRepository) {
    this.repo = articleRepository;
  }

  getArticlesAndCount = async ({ orderBy, page, pageSize, keyword }) => {
    const totalCount = await this.repo.count(keyword);

    const list = await this.repo.findMany({
      orderBy,
      page,
      pageSize,
      keyword,
    });

    return { totalCount, list };
  };

  getArticleById = async (id) => {
    return await this.repo.findById(id);
  };

  postArticle = async (body) => {
    return await this.repo.create(body);
  };

  patchArticleById = async (id, body) => {
    let product = await this.repo.findById(id);
    if (!product) return;

    Object.keys(body).forEach((k) => {
      product[k] = body[k];
    });
    return await this.repo.update(id, product);
  };

  deleteArticleById = async (id) => {
    return await this.repo.deleteById(id);
  };
}
