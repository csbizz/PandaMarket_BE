import formatTimestamp from '#utils/format-timestamp.js';
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class LogInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    const req = context.switchToHttp().getRequest();
    const { method, url } = req;
    const now = new Date();

    console.log(`Incoming Reqeust: ${method} ${url}`);
    console.log(`Requested Time: ${formatTimestamp(now)}`);

    return next.handle();
  }
}
