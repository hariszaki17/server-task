import { MovieDetailDto } from './movie-detail.dto';
import { MovieSearchDto } from './movie-search.dto';
import { MovieService } from './movie.service';
export declare class MovieController {
    private movieService;
    constructor(movieService: MovieService);
    search(req: any): Promise<MovieDetailDto>;
    detailSearch(req: any): Promise<MovieSearchDto[]>;
}
