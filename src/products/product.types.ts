import { Comment } from '#comments/comment.types.js';
import { IProductImage } from '#products/interfaces/image.interface.js';
import { IProductTag } from '#products/interfaces/tag.interface.js';
import { ModelBase } from '#types/common.types.js';
import { Product as PrismaProduct, ProductImage as PrismaProductImage, User } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsArray, IsInt, IsOptional, IsString, ValidateNested } from 'class-validator';

interface PrismaProductBase extends Omit<PrismaProduct, keyof ModelBase> {}
interface PrismaProductImageBase extends Omit<PrismaProductImage, keyof ModelBase> {}

interface ProductImageBase extends PrismaProductImageBase {}
interface ProductBase extends PrismaProductBase {}

export interface Product extends ProductBase, ModelBase {}
export interface ProductImage extends ProductImageBase, ModelBase {}

class FileDetail {
  @IsString()
  originalname: string;

  @IsString()
  filename: string;
}

export class ProductInputDTO {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsInt()
  price: number;

  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @ValidateNested()
  @Type(() => FileDetail)
  @IsOptional()
  file?: FileDetail;
}

export interface ProductCreateDTO extends ProductInputDTO {
  ownerId: string;
}

export interface ProductOutputDTO extends Omit<ProductProperties, 'productTags' | 'productImages'> {
  tags?: string[];
  images?: string[];
}

export interface ProductProperties extends ModelBase {
  name: string;
  description: string;
  price: number;
  likeCount: number;
  ownerId: string;
  ownerNickname?: string;
  likeUsers?: User[];
  comments?: Comment[];
  productTags?: IProductTag[];
  productImages?: IProductImage[];
}

export interface ProductTagProperties extends ModelBase {
  tag: string;
  productId: string;
}

export interface ProductImageProperties extends ModelBase {
  originalName: string;
  fileName: string;
  productId: string;
}
