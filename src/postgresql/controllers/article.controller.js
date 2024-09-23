import { assert } from 'superstruct';
import { CreateArticle, PatchArticle, Uuid } from '../../struct.js';
import { MESSAGES } from '../../constants.js';
import { TypeError } from '../../error.js';

export class ArticleController {
  constructor(articleService) {
    this.service = articleService;
  }

  getArticles = async (req, res) => {
    const orderBy = req.query.orderBy || 'recent';
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 10;
    const keyword = req.query.keyword || '';

    if (isNaN(page) || isNaN(pageSize)) {
      throw new TypeError('page and pageSize should be an integer');
    }

    const resBody = await this.service.getArticlesAndCount({
      orderBy,
      page,
      pageSize,
      keyword,
    });

    res.status(200).json(resBody);
  };

  getArticleById = async (req, res) => {
    assert(req.params.id, Uuid);
    const id = req.params.id;

    const article = await this.service.getArticleById(id);

    if (!article) res.status(404).json({ message: MESSAGES.NOID });

    res.json(article);
  };

  postArticle = async (req, res) => {
    assert(req.body, CreateArticle);

    res.status(201).json(await this.service.postArticle(req.body));
  };

  patchArticleById = async (req, res) => {
    assert(req.params.id, Uuid, MESSAGES.IDFORMAT);
    assert(req.body, PatchArticle);
    const id = req.params.id;

    const article = await this.service.patchArticleById(id, req.body);

    if (!article) res.status(404).json({ message: MESSAGES.NOID });

    res.json(article);
  };

  deleteArticleById = async (req, res) => {
    assert(req.params.id, Uuid, MESSAGES.IDFORMAT);
    const id = req.params.id;

    const article = await this.service.deleteArticleById(id);

    if (!article) res.status(404).json({ message: MESSAGES.NOID });

    res.json(article);
  };
}
