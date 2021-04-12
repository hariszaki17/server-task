import { MovieRequestLogRepository } from './movie-request-log.repository';
export declare class MovieRequestLogService {
    private movieRequestLogRepository;
    constructor(movieRequestLogRepository: MovieRequestLogRepository);
    createMovieRequestLogService(payload: any): Promise<void>;
}
