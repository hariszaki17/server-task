import { HttpModule, MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieRequestLog } from './movie-request-log/movie-request-log.entity';
import { MovieRequestLogModule } from './movie-request-log/movie-request-log.module';
import { MovieRequestLogService } from './movie-request-log/movie-request-log.service';
import { MovieController } from './movie/movie.controller';
import { MovieModule } from './movie/movie.module';
import { AuthModule } from './auth/auth.module';
import { AuthMiddleware } from './middleware/auth.middleware';
import { RequestFlagMiddleware } from './middleware/request-flag.middleware';
import { MovieService } from './movie/movie.service';
import { ApiService } from './api/api.service';
import { ApiModule } from './api/api.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Str0ngP@ss',
      database: 'movie',
      entities: [MovieRequestLog],
      synchronize: true,
    }),
    MovieRequestLogModule,
    MovieModule,
    AuthModule,
    HttpModule,
    ApiModule,
  ],
  controllers: [AppController, MovieController],
  providers: [AppService, MovieRequestLogService, MovieService, ApiService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestFlagMiddleware, AuthMiddleware).forRoutes('')
  }
}
