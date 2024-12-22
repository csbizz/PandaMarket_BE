import { ModelBase } from '#types/common.types.js';

export interface ProductImageProperties extends ModelBase {
  originalName: string;
  fileName: string;
  productId: string;
}

export interface IProductImage {
  originalName: string;
  fileName: string;
  productId: string;
}

export class ProductImage implements IProductImage {
  private readonly id: string;
  private readonly createdAt: Date;
  private readonly updatedAt: Date;

  private _originalName: string;
  private _fileName: string;
  private readonly _productId: string;

  constructor(properties: ProductImageProperties) {
    this.id = properties.id;
    this.createdAt = properties.createdAt;
    this.updatedAt = properties.updatedAt;
    this._originalName = properties.originalName;
    this._fileName = properties.fileName;
    this._productId = properties.productId;
  }

  get originalName(): string {
    return this._originalName;
  }

  set originalName(value: string) {
    this._originalName = value;
  }

  get fileName(): string {
    return this._fileName;
  }

  set fileName(value: string) {
    this._fileName = value;
  }

  get productId(): string {
    return this._productId;
  }
}
