import ExceptionMessages from '#exceptions/exception.messages.js';
import { NotFoundException } from '#exceptions/http.exception.js';

export class CommentNotFoundException extends NotFoundException {
  constructor() {
    super(ExceptionMessages.COMMENT_NOT_FOUND);
  }
}
