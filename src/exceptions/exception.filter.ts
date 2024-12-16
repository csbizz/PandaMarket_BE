import { BaseException } from '#exceptions/base.exception.js';
import formatTimestamp from '#utils/format-timestamp.js';
import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(BaseException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: BaseException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    response.status(exception.statusCode).json({
      statusCode: exception.statusCode,
      message: exception.message,
      timestamp: formatTimestamp(new Date()),
      path: request.url,
    });
  }
}
