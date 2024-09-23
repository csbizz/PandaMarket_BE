export class ProductService {
  constructor(productRepository) {
    this.repo = productRepository;
  }

  getProductsAndCount = async ({ orderBy, page, pageSize, keyword }) => {
    const totalCount = await this.repo.count(keyword);

    const list = await this.repo.findMany({
      orderBy,
      page,
      pageSize,
      keyword,
    });

    return { totalCount, list };
  };

  getProductById = async (id) => {
    return await this.repo.findById(id);
  };

  postProduct = async (body) => {
    return await this.repo.create(body);
  };

  patchProductById = async (id, body) => {
    let product = await this.repo.findById(id);
    if (!product) return;

    Object.keys(body).forEach((k) => {
      product[k] = body[k];
    });
    return await this.repo.update(id, product);
  };

  deleteProductById = async (id) => {
    return await this.repo.deleteById(id);
  };
}
