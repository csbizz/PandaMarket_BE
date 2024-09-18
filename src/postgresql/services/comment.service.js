export class CommentService {
  constructor(commentModel) {
    this.model = commentModel;
  }

  getComments = async () => {
    return await this.model.findMany();
  };

  getCommentsAndCursor = async ({ articleId, limit, cursor }) => {
    return await this.model.findManyAndCursor({ articleId, limit, cursor });
  };

  getCommentById = async (id) => {
    return await this.model.findById(id);
  };

  postComment = async (body) => {
    return await this.model.create(body);
  };

  patchCommentById = async (id, body) => {
    let product = await this.model.findById(id);
    if (!product) return;

    Object.keys(body).forEach((k) => {
      product[k] = body[k];
    });
    return await this.model.update(id, product);
  };

  deleteCommentById = async (id) => {
    return await this.model.deleteById(id);
  };
}
