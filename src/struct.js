import * as s from 'superstruct';
import isUuid from 'is-uuid';

const mongodbId = s.size(s.string(), 24, 24);
const Uuid = s.define('Uuid', (value) => isUuid.v4(value));

const CreateProduct = s.object({
  name: s.size(s.string(), 1, 10),
  description: s.size(s.string(), 10, 100),
  price: s.min(s.integer(), 1),
  tags: s.optional(s.array(s.max(s.string(), 5))),
  images: s.optional(s.array(s.string())),
});

const CreateArticle = s.object({
  title: s.string(),
  content: s.string(),
  images: s.optional(s.array(s.string())),
  ownerId: Uuid,
});

const PatchProduct = s.partial(CreateProduct);
const PatchArticle = s.partial(CreateArticle);

export {
  mongodbId,
  Uuid,
  CreateProduct,
  CreateArticle,
  PatchProduct,
  PatchArticle,
};
