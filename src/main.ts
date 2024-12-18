import { port } from '#configs/common.config.js';
import { HttpExceptionFilter } from '#exceptions/exception.filter.js';
import { AppModule } from '#global/app.module.js';
import { LogInterceptor } from '#global/interceptors/log.interceptor.js';
import { NestFactory } from '@nestjs/core';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ credentials: true, origin: true });
  app.use(cookieParser());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new LogInterceptor());
  await app.listen(port);
}
bootstrap();
