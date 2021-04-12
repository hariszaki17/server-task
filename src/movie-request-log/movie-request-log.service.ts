import { Injectable } from '@nestjs/common';
import { MovieRequestLogRepository } from './movie-request-log.repository';

@Injectable()
export class MovieRequestLogService {
    constructor(
        private movieRequestLogRepository: MovieRequestLogRepository
    ) {}

    public async createMovieRequestLogService(payload: any) {
       await this.movieRequestLogRepository.createMovieRequestLog(payload)        
    }
}
