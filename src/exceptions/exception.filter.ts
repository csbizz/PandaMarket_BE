import { BaseException } from '#exceptions/base.exception.js';
import { UnCatchedException } from '#exceptions/common.exception.js';
import formatTimestamp from '#utils/format-timestamp.js';
import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const res = exception instanceof BaseException ? exception : new UnCatchedException();

    res.timestamp = formatTimestamp(new Date());
    res.path = request.url;

    response.status(res.statusCode).json({
      statusCode: res.statusCode,
      message: res.message,
      timestamp: res.timestamp,
      path: res.path,
    });
  }
}
