export class CommentModel {
  constructor(client) {
    this.model = client.comment;
  }

  findMany = async () => {
    return await this.model.findMany();
  };

  findManyAndCursor = async ({ articleId, limit, cursor }) => {
    const pageOption = cursor ? { skip: 1, cursor: { id: cursor } } : {};

    const comments = await this.model.findMany({
      ...pageOption,
      take: limit,
      where: {
        articleId,
      },
    });
    const nextCursor = comments.at(-1).id;

    return { nextCursor, list: comments };
  };

  findById = async (id) => {
    return this.model.findUnique({
      where: {
        id,
      },
    });
  };

  create = async (data) => {
    return await this.model.create({
      data,
    });
  };

  update = async (id, data) => {
    return await this.model.update({
      where: { id },
      data,
    });
  };

  deleteById = async (id) => {
    return await this.model.delete({
      where: { id },
    });
  };
}
