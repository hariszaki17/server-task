import { Controller, Get, Param, Req } from '@nestjs/common';
import { MovieRequestLogDto } from 'src/movie-request-log/movie-request-log.dto';
import { MovieDetailDto } from './movie-detail.dto';
import { MovieSearchDto } from './movie-search.dto';
import { MovieService } from './movie.service';

@Controller()
export class MovieController {
    constructor(
        private movieService: MovieService
    ) {}

    @Get('search')
    async search(@Req() req: any): Promise<MovieDetailDto> {
        delete req.query['t']
        delete req.query['i']
        const query: any = new URLSearchParams(req.query);
        
        console.log(process.env.HOST);
        
        let movieRequest: MovieRequestLogDto = {
            method: req.method,
            pathname: req._parsedUrl.pathname,
            query: query.toString(),
            requestTimestamp: req.timestamp
        }
        
        return await this.movieService.searchDetailMovie(movieRequest)
    }

    @Get('detail')
    async detailSearch(@Req() req: any): Promise<MovieSearchDto[]> {        
        delete req.query['s']
        const query: any = new URLSearchParams(req.query);

        let movieRequest: MovieRequestLogDto = {
            method: req.method,
            pathname: req._parsedUrl.pathname,
            query: query.toString(),
            requestTimestamp: req.timestamp
        }

        return await this.movieService.searchMovie(movieRequest)        
    }


}
