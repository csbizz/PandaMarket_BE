import { assert } from 'superstruct';
import { TypeError } from '../utils/error.js';
import { CreateComment, Cursor, PatchComment, Uuid } from '../../struct.js';
import { MESSAGES } from '../../constants.js';

export class CommentController {
  constructor(commentService) {
    this.service = commentService;
  }

  getCommentsOfArticle = async (req, res) => {
    assert(req.params.id, Uuid, MESSAGES.IDFORMAT);
    assert(req.params.cursor, Cursor, MESSAGES.IDFORMAT);
    const articleId = req.params.id;
    const limit = Number(req.query.limit) || 10;
    const cursor = req.params.cursor;

    if (isNaN(limit)) {
      throw new TypeError('limit should be an integer');
    }

    res.status(200).json(
      await this.service.getCommentsAndCount({
        articleId,
        limit,
        cursor,
      })
    );
  };

  postComment = async (req, res) => {
    assert(req.body, CreateComment);
    const newComment = await this.service.postComment(req.body);

    res.status(201).json(newComment);
  };

  patchCommentById = async (req, res) => {
    assert(req.params.id, Uuid, MESSAGES.IDFORMAT);
    assert(req.body, PatchComment);
    const id = req.params.id;

    const product = await this.service.patchCommentById(id, req.body);

    if (product) res.json(product);
    else res.status(404).json({ message: MESSAGES.NOID });
  };

  deleteCommentById = async (req, res) => {
    assert(req.params.id, Uuid, MESSAGES.IDFORMAT);
    const id = req.params.id;

    const product = await this.service.deleteCommentById(id);

    if (product) res.status(200).json(product);
    else res.status(404).json({ message: MESSAGES.NOID });
  };
}
