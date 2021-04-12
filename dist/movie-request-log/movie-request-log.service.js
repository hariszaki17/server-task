"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieRequestLogService = void 0;
const common_1 = require("@nestjs/common");
const movie_request_log_repository_1 = require("./movie-request-log.repository");
let MovieRequestLogService = class MovieRequestLogService {
    constructor(movieRequestLogRepository) {
        this.movieRequestLogRepository = movieRequestLogRepository;
    }
    async createMovieRequestLogService(payload) {
        await this.movieRequestLogRepository.createMovieRequestLog(payload);
    }
};
MovieRequestLogService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [movie_request_log_repository_1.MovieRequestLogRepository])
], MovieRequestLogService);
exports.MovieRequestLogService = MovieRequestLogService;
//# sourceMappingURL=movie-request-log.service.js.map