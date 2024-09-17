import { TypeError } from '../utils/error.js';

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

    res.status(200).json(
      await this.productService.getProductsAndCount({
        orderBy,
        page,
        pageSize,
        keyword,
      })
    );
  };
}
