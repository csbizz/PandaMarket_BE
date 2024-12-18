import { port } from '#configs/common.config.js';
import { HttpExceptionFilter } from '#exceptions/exception.filter.js';
import { AppModule } from '#global/app.module.js';
import { NestFactory } from '@nestjs/core';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ credentials: true, origin: true });
  app.use(cookieParser());
  // app.useGlobalInterceptors(new LogInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(port);
}
bootstrap();
