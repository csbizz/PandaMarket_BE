import ExceptionMessages from '#exceptions/exception.messages.js';
import { InternalServerErrorException } from '#exceptions/http.exception.js';

export class UnCatchedException extends InternalServerErrorException {
  constructor() {
    super(ExceptionMessages.UN_CATCHED_EXCEPTION);
  }
}

export class UuidException extends InternalServerErrorException {
  constructor() {
    super(ExceptionMessages.ID_FORMAT);
  }
}
