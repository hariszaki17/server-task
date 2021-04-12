import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieRequestLogRepository } from './movie-request-log.repository';
import { MovieRequestLogService } from './movie-request-log.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ MovieRequestLogRepository ])
  ],
  exports: [
    TypeOrmModule
  ],
  providers: [MovieRequestLogService]
})
export class MovieRequestLogModule {}
