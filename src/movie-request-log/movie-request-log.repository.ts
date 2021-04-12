import { EntityRepository, Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { MovieRequestLog } from "./movie-request-log.entity";

@Injectable()
@EntityRepository(MovieRequestLog)
export class MovieRequestLogRepository extends Repository<MovieRequestLog> {
    public async createMovieRequestLog(payload: any): Promise<MovieRequestLog[]> {        
        const movieRequestNewData = await this.create(payload)        
        return await this.save(movieRequestNewData)
    }
}