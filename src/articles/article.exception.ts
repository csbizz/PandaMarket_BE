import ExceptionMessages from '#exceptions/exception.messages.js';
import { NotFoundException } from '#exceptions/http.exception.js';

export class ArticleNotFoundException extends NotFoundException {
  constructor() {
    super(ExceptionMessages.ARTICLE_NOT_FOUND);
  }
}
