import ExceptionMessages from '#exceptions/exception.messages.js';
import { NotFoundException } from '#exceptions/http.exception.js';

export class ProductNotFoundException extends NotFoundException {
  constructor() {
    super(ExceptionMessages.PRODUCT_NOT_FOUND);
  }
}
