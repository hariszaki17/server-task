import { MovieRequestLogDto } from 'src/movie-request-log/movie-request-log.dto';
import { MovieRequestLogService } from 'src/movie-request-log/movie-request-log.service';
import { ApiService } from '../api/api.service';
import { MovieDetailDto } from './movie-detail.dto';
import { MovieSearchDto } from './movie-search.dto';
export declare class MovieService {
    private movieRequestLogService;
    private apiService;
    constructor(movieRequestLogService: MovieRequestLogService, apiService: ApiService);
    searchDetailMovie(movieRequestLog: MovieRequestLogDto): Promise<MovieDetailDto>;
    searchMovie(movieRequestLog: MovieRequestLogDto): Promise<MovieSearchDto[]>;
}
