import { assert } from 'superstruct';
import { CreateProduct, PatchProduct, Uuid } from '../../struct.js';
import { MESSAGES } from '../../constants.js';
import { TypeError } from '../../error.js';

export class ProductController {
  constructor(productService) {
    this.service = productService;
  }

  getProducts = async (req, res) => {
    const orderBy = req.query.orderBy || 'recent';
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 10;
    const keyword = req.query.keyword || '';

    if (isNaN(page) || isNaN(pageSize)) {
      throw new TypeError('page and pageSize should be an integer');
    }

    res.json(
      await this.service.getProductsAndCount({
        orderBy,
        page,
        pageSize,
        keyword,
      })
    );
  };

  getProductById = async (req, res) => {
    assert(req.params.id, Uuid);
    const id = req.params.id;

    const product = await this.service.getProductById(id);

    if (!product) res.status(404).json({ message: MESSAGES.NOID });

    res.json(product);
  };

  postProduct = async (req, res) => {
    assert(req.body, CreateProduct);

    res.status(201).json(await this.service.postProduct(req.body));
  };

  patchProductById = async (req, res) => {
    assert(req.params.id, Uuid, MESSAGES.IDFORMAT);
    assert(req.body, PatchProduct);
    const id = req.params.id;

    const product = await this.service.patchProductById(id, req.body);

    if (!product) res.status(404).json({ message: MESSAGES.NOID });

    res.json(product);
  };

  deleteProductById = async (req, res) => {
    assert(req.params.id, Uuid, MESSAGES.IDFORMAT);
    const id = req.params.id;

    const product = await this.service.deleteProductById(id);

    if (!product) res.status(404).json({ message: MESSAGES.NOID });

    res.json(product);
  };
}
