import { Comment } from '#comments/comment.types.js';
import { IProductImage } from '#products/interfaces/image.interface.js';
import { IProduct } from '#products/interfaces/product.interface.js';
import { IProductTag } from '#products/interfaces/tag.interface.js';
import { ProductOutputDTO, ProductProperties } from '#products/product.types.js';
import filterProperties from '#utils/filterProperties.js';
import { User } from '@prisma/client';

export class Product implements IProduct {
  private readonly _id?: string;
  private readonly createdAt?: Date;
  private readonly updatedAt?: Date;

  private name: string;
  private description: string;
  private price: number;
  private likeCount: number;
  private readonly _ownerId: string;
  private readonly _ownerNickname: string;

  private likeUsers?: User[];
  private comments?: Comment[];
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
    this._ownerNickname = properties.ownerNickname;

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

  get ownerNickname(): string {
    return this._ownerNickname;
  }

  get values(): ProductProperties {
    const filter = [];

    // NOTE _로 시작하는 프로퍼티를 가공
    const properties = Object.getOwnPropertyNames(this).map(prop => this.withoutUnderScore(prop));
    const filtered = filterProperties(properties, filter);
    const values = filtered.reduce((acc, prop) => ({ ...acc, [prop]: this[prop as keyof this] }), {});

    return values as ProductProperties;
  }

  set values(data: Partial<ProductProperties>) {
    const readonly = ['id', 'createdAt', 'updatedAt', 'ownerId', 'ownerNickname'];
    const filteredData = filterProperties(data, readonly);

    const properties = Object.getOwnPropertyNames(this);
    properties.forEach(prop => {
      const key = this.withoutUnderScore(prop);

      if (key in filteredData) {
        (this[prop as keyof this] as unknown) = filteredData[key as keyof ProductProperties];
      }
    });
  }

  get output(): ProductOutputDTO {
    const filter = ['productTags', 'productImages'];
    const result = filterProperties(this.values, filter);

    if (this.productTags) {
      const tags = this.productTags.map(tag => tag.value);
      result['tags'] = tags;
    }
    if (this.productImages) {
      const images = this.productImages.map(image => `/files/${image.fileName}`);
      result['images'] = images;
    }

    return result as ProductOutputDTO;
  }

  get toDB(): Partial<ProductProperties> {
    const filter = [
      'createdAt',
      'updatedAt',
      'ownerId',
      'ownerNickname',
      'productTags',
      'productImages',
      'likeUsers',
      'comments',
    ];
    const result = filterProperties<ProductProperties>(this.values, filter);

    return result;
  }

  private withoutUnderScore(key: string): string {
    return key.startsWith('_') ? key.slice(1) : key;
  }
}
