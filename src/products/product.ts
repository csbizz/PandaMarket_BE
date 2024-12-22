import { IProductImage } from '#products/image.js';
import { ProductOutputDTO } from '#products/product.types.js';
import { IProductTag } from '#products/tag.js';
import { ModelBase } from '#types/common.types.js';

export interface ProductProperties extends ModelBase {
  name: string;
  description: string;
  price: number;
  likeCount: number;
  ownerId: string;
  ownerNickname?: string;
  likeUsers?: string[]; // TODO User로 변경
  comments?: string[]; // TODO Comment로 변경
  productTags?: IProductTag[];
  productImages?: IProductImage[];
}

export interface IProduct {
  id: string;
  tags: IProductTag[];
  images: IProductImage[];
  get ownerId(): string;
  get values(): ProductProperties;
  set values(data: Partial<ProductProperties>);
  get output(): ProductOutputDTO;
}

export class Product implements IProduct {
  private readonly _id?: string;
  private readonly createdAt?: Date;
  private readonly updatedAt?: Date;

  private name: string;
  private description: string;
  private price: number;
  private likeCount: number;
  private readonly _ownerId: string;
  private readonly ownerNickname: string;

  private likeUsers?: string[]; // TODO User로 변경
  private comments?: string[]; // TODO Comment로 변경
  private productTags?: IProductTag[];
  private productImages?: IProductImage[];

  constructor(properties: ProductProperties) {
    this._id = properties.id;
    this.createdAt = properties.createdAt;
    this.updatedAt = properties.updatedAt;

    this.name = properties.name;
    this.description = properties.description;
    this.price = properties.price;
    this.likeCount = properties.likeCount;
    this._ownerId = properties.ownerId;
    this.ownerNickname = properties.ownerNickname;

    this.likeUsers = properties.likeUsers;
    this.comments = properties.comments;
    this.productTags = properties.productTags;
    this.productImages = properties.productImages;
  }

  get id(): string {
    return this._id;
  }

  get tags(): IProductTag[] {
    return this.productTags;
  }

  set tags(tags: IProductTag[]) {
    this.productTags = tags;
  }

  get images(): IProductImage[] {
    return this.productImages;
  }

  set images(images: IProductImage[]) {
    this.productImages = images;
  }

  get ownerId(): string {
    return this._ownerId;
  }

  get values(): ProductProperties {
    const filter = [];

    // NOTE _로 시작하는 프로퍼티를 가공
    const properties = Object.getOwnPropertyNames(this).map(prop => (prop.startsWith('_') ? prop.slice(1) : prop));
    const filtered = properties.filter(prop => !filter.includes(prop));
    const values = filtered.reduce((acc, prop) => ({ ...acc, [prop]: this[prop as keyof this] }), {});

    return values as ProductProperties;
  }

  set values(data: Partial<ProductProperties>) {
    const readonly = ['id', 'createdAt', 'updatedAt', 'ownerId', 'ownerNickname'];
    const filteredData = { ...data };
    readonly.forEach(key => delete filteredData[key]);

    const properties = Object.getOwnPropertyNames(this);
    properties.forEach(prop => {
      const key = prop.startsWith('_') ? prop.slice(1) : prop;

      if (key in filteredData) {
        (this[prop as keyof this] as unknown) = filteredData[key as keyof ProductProperties];
      }
    });
  }

  get output(): ProductOutputDTO {
    const filter = ['productTags', 'productImages'];
    const values = this.values;
    filter.forEach(prop => delete values[prop]);

    const result = { ...values };

    if (this.productTags) {
      const tags = this.productTags.map(tag => tag.value);
      result['tags'] = tags;
    }
    if (this.productImages) {
      const images = this.productImages.map(image => `/files/${image.fileName}`);
      result['images'] = images;
    }

    return result;
  }
}
