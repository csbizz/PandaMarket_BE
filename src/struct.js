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
  favoriteCount: s.optional(s.min(s.integer(), 0)),
});

const PatchProduct = s.partial(CreateProduct);

export { mongodbId, Uuid, CreateProduct, PatchProduct };
