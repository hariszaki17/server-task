import { Injectable } from '@nestjs/common';
import { MovieRequestLogDto } from 'src/movie-request-log/movie-request-log.dto';
import { MovieRequestLogService } from 'src/movie-request-log/movie-request-log.service';
import { ApiService } from '../api/api.service';
import { MovieDetailDto } from './movie-detail.dto';
import { MovieSearchDto } from './movie-search.dto';

@Injectable()
export class MovieService {
    constructor(
        private movieRequestLogService: MovieRequestLogService,
        private apiService: ApiService
    ) {}

    public async searchDetailMovie(movieRequestLog: MovieRequestLogDto): Promise<MovieDetailDto> {
        await this.movieRequestLogService.createMovieRequestLogService(movieRequestLog)
        return await this.apiService.getDataDetail(movieRequestLog.query)
    }

    public async searchMovie(movieRequestLog: MovieRequestLogDto): Promise<MovieSearchDto[]> {
        await this.movieRequestLogService.createMovieRequestLogService(movieRequestLog)
        return await this.apiService.getDataSearch(movieRequestLog.query)
    }
}
