import { HttpService, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { MovieDetailDto } from '../movie/movie-detail.dto';
import { MovieSearchDto } from '../movie/movie-search.dto';

@Injectable()
export class ApiService {
    constructor(
        private httpService: HttpService
    ) {}

    public async getDataDetail(query: string): Promise<MovieDetailDto> {
        const response: AxiosResponse<any> = await this.httpService.
        get(`http://www.omdbapi.com/?apikey=c799f574&${query}`)
        .toPromise()
        
        const data: MovieDetailDto = response.data
        return data
    }

    public async getDataSearch(query: string): Promise<MovieSearchDto[]> {
        const response: AxiosResponse<any> = await this.httpService.
        get(`http://www.omdbapi.com/?apikey=c799f574&${query}`)
        .toPromise()
        
        const data: MovieDetailDto[] = response.data
        return data
    }
}
