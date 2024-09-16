import { MESSAGES } from '../../constants.js';
import { TypeError, CastError } from '../utils/error.js';

export class ProductController {
  constructor(productService) {
    this.productService = productService;
  }

  getProducts = async (req, res) => {
    const orderBy = req.query.orderBy || 'recent';
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 10;
    const keyword = req.query.keyword || '';

    if (isNaN(page) || isNaN(pageSize)) {
      throw new TypeError('page and pageSize should be an integer');
    }

    const products = await this.productService.getProducts({
      orderBy,
      page,
      pageSize,
      keyword,
    });

    const count = await this.productService.getCount(keyword);

    res.status(200).json({
      list: products,
      totalCount: count,
    });
  };

  getProductById = async (req, res) => {
    const id = req.params.id;

    if (id.length !== 24) {
      throw new CastError(MESSAGES.IDFORMAT);
    }

    const product = await this.productService.getProductById(id);

    if (product) res.json(product);
    else res.status(404).json({ message: MESSAGES.NOID });
  };

  postProduct = async (req, res) => {
    const newProduct = await this.productService.postProduct(req.body);

    res.status(201).json(newProduct);
  };

  patchProductById = async (req, res) => {
    const id = req.params.id;

    if (id.length !== 24) {
      throw new CastError(MESSAGES.IDFORMAT);
    }

    const product = await this.productService.patchProductById(id, req.body);

    if (product) res.json(product);
    else res.status(404).json({ message: MESSAGES.NOID });
  };

  deleteProductById = async (req, res) => {
    const id = req.params.id;

    if (id.length !== 24) {
      throw new CastError(MESSAGES.IDFORMAT);
    }

    const product = await this.productService.deleteProductById(id);

    if (product) res.sendStatus(204);
    else res.status(404).json({ message: MESSAGES.NOID });
  };
}
