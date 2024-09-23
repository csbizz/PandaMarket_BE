export class CommentService {
  constructor(commentRepository) {
    this.repo = commentRepository;
  }

  getComments = async () => {
    return await this.repo.findMany();
  };

  getCommentsAndCursor = async ({ id, limit, cursor, type }) => {
    return await this.repo.findManyAndCursor({ id, limit, cursor, type });
  };

  postComment = async (body) => {
    return await this.repo.create(body);
  };

  patchCommentById = async (id, body) => {
    let product = await this.repo.findById(id);
    if (!product) return;

    Object.keys(body).forEach((k) => {
      product[k] = body[k];
    });
    return await this.repo.update(id, product);
  };

  deleteCommentById = async (id) => {
    return await this.repo.deleteById(id);
  };
}
