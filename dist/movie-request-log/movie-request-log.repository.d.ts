import { Repository } from "typeorm";
import { MovieRequestLog } from "./movie-request-log.entity";
export declare class MovieRequestLogRepository extends Repository<MovieRequestLog> {
    createMovieRequestLog(payload: any): Promise<MovieRequestLog[]>;
}
