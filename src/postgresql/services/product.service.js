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
}
