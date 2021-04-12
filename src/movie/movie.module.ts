import { Module } from '@nestjs/common';
import { ApiModule } from 'src/api/api.module';
import { ApiService } from 'src/api/api.service';
import { MovieRequestLogModule } from 'src/movie-request-log/movie-request-log.module';
import { MovieRequestLogService } from 'src/movie-request-log/movie-request-log.service';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';

@Module({
  imports: [ MovieRequestLogModule, ApiModule ],
  controllers: [MovieController],
  providers: [MovieService, MovieRequestLogService, ApiService]
})
export class MovieModule {}
