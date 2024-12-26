import { IProductTag } from '#products/interfaces/tag.interface.js';
import { ProductTagProperties } from '#products/product.types.js';

export class ProductTag implements IProductTag {
  private readonly id: string;
  private readonly createdAt: Date;
  private readonly updatedAt: Date;

  private _tag: string;
  private readonly _productId: string;

  constructor(properties: ProductTagProperties) {
    this.id = properties.id;
    this.createdAt = properties.createdAt;
    this.updatedAt = properties.updatedAt;
    this._tag = properties.tag;
    this._productId = properties.productId;
  }

  get value(): string {
    return this._tag;
  }

  set value(value: string) {
    this._tag = value;
  }

  get values(): ProductTagProperties {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      tag: this._tag,
      productId: this._productId,
    };
  }

  get productId(): string {
    return this._productId;
  }
}
