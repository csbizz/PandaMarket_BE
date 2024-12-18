import { ArticleModule } from '#articles/article.module.js';
import { AuthModule } from '#auth/auth.module.js';
import { CommentModule } from '#comments/comment.module.js';
import jwtConfig from '#configs/jwt.config.js';
import { postgresConfig } from '#configs/postgres.config.js';
import { AppController } from '#global/app.controller.js';
import { DevController } from '#global/dev.controller.js';
import { LogInterceptor } from '#global/interceptors/log.interceptor.js';
import { AlsMiddleware } from '#global/middlewares/als.middleware.js';
import { StorageModule } from '#global/storage.module.js';
import { ProductModule } from '#products/product.module.js';
import { UserModule } from '#users/user.module.js';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    ProductModule,
    StorageModule,
    AuthModule,
    UserModule,
    CommentModule,
    ArticleModule,
    ConfigModule.forRoot({ isGlobal: true, load: [jwtConfig, postgresConfig] }),
  ],
  controllers: [AppController, DevController],
  providers: [{ provide: APP_INTERCEPTOR, useClass: LogInterceptor }],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AlsMiddleware).forRoutes('*');
  }
}
