import { HttpService } from '@nestjs/common';
import { MovieDetailDto } from '../movie/movie-detail.dto';
import { MovieSearchDto } from '../movie/movie-search.dto';
export declare class ApiService {
    private httpService;
    constructor(httpService: HttpService);
    getDataDetail(query: string): Promise<MovieDetailDto>;
    getDataSearch(query: string): Promise<MovieSearchDto[]>;
}
