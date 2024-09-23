export class CommentService {
  constructor(commentDB) {
    this.db = commentDB;
  }

  getComments = async () => {
    return await this.db.findMany();
  };

  getCommentsAndCursor = async ({ id, limit, cursor, type }) => {
    return await this.db.findManyAndCursor({ id, limit, cursor, type });
  };

  postComment = async (body) => {
    return await this.db.create(body);
  };

  patchCommentById = async (id, body) => {
    let product = await this.db.findById(id);
    if (!product) return;

    Object.keys(body).forEach((k) => {
      product[k] = body[k];
    });
    return await this.db.update(id, product);
  };

  deleteCommentById = async (id) => {
    return await this.db.deleteById(id);
  };
}
