import { ProductProperties } from '#products/product.js';
import { ModelBase } from '#types/common.types.js';
import { Product as PrismaProduct, ProductImage as PrismaProductImage } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsArray, IsInt, IsString, ValidateNested } from 'class-validator';

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

  @IsInt()
  likeCount: number;

  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @ValidateNested()
  @Type(() => FileDetail)
  file: FileDetail;
}

export interface ProductCreateDTO extends ProductInputDTO {
  ownerId: string;
}

export interface ProductOutputDTO extends Omit<ProductProperties, 'productTags' | 'productImages'> {
  tags?: string[];
  images?: string[];
}
