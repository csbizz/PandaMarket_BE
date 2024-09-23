export class ProductService {
  constructor(productDB) {
    this.db = productDB;
  }

  getProductsAndCount = async ({ orderBy, page, pageSize, keyword }) => {
    const totalCount = await this.db.count(keyword);

    const list = await this.db.findMany({
      orderBy,
      page,
      pageSize,
      keyword,
    });

    return { totalCount, list };
  };

  getProductById = async (id) => {
    return await this.db.findById(id);
  };

  postProduct = async (body) => {
    return await this.db.create(body);
  };

  patchProductById = async (id, body) => {
    let product = await this.db.findById(id);
    if (!product) return;

    Object.keys(body).forEach((k) => {
      product[k] = body[k];
    });
    return await this.db.update(id, product);
  };

  deleteProductById = async (id) => {
    return await this.db.deleteById(id);
  };
}
