export class ProductService {
  constructor(productModel) {
    this.productModel = productModel;
  }

  getProductsAndCount = async ({ orderBy, page, pageSize, keyword }) => {
    const list = await this.productModel.findMany({
      orderBy,
      page,
      pageSize,
      keyword,
    });

    const totalCount = await this.productModel.count(keyword);

    return { list, totalCount };
  };

  getProductById = async (id) => {
    return await this.productModel.findById(id);
  };

  postProduct = async (body) => {
    return await this.productModel.create(body);
  };

  patchProductById = async (id, body) => {
    let product = await this.productModel.findById(id);
    if (!product) return;

    Object.keys(body).forEach((k) => {
      product[k] = body[k];
    });
    return await this.productModel.update(id, product);
  };

  deleteProductById = async (id) => {
    return await this.productModel.deleteById(id);
  };
}
