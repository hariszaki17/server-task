"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieRequestLogRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const movie_request_log_entity_1 = require("./movie-request-log.entity");
let MovieRequestLogRepository = class MovieRequestLogRepository extends typeorm_1.Repository {
    async createMovieRequestLog(payload) {
        const movieRequestNewData = await this.create(payload);
        return await this.save(movieRequestNewData);
    }
};
MovieRequestLogRepository = __decorate([
    common_1.Injectable(),
    typeorm_1.EntityRepository(movie_request_log_entity_1.MovieRequestLog)
], MovieRequestLogRepository);
exports.MovieRequestLogRepository = MovieRequestLogRepository;
//# sourceMappingURL=movie-request-log.repository.js.map