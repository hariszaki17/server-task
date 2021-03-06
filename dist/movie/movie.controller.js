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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieController = void 0;
const common_1 = require("@nestjs/common");
const movie_request_log_dto_1 = require("../movie-request-log/movie-request-log.dto");
const movie_service_1 = require("./movie.service");
let MovieController = class MovieController {
    constructor(movieService) {
        this.movieService = movieService;
    }
    async search(req) {
        delete req.query['t'];
        delete req.query['i'];
        const query = new URLSearchParams(req.query);
        console.log(process.env.HOST);
        let movieRequest = {
            method: req.method,
            pathname: req._parsedUrl.pathname,
            query: query.toString(),
            requestTimestamp: req.timestamp
        };
        return await this.movieService.searchDetailMovie(movieRequest);
    }
    async detailSearch(req) {
        delete req.query['s'];
        const query = new URLSearchParams(req.query);
        let movieRequest = {
            method: req.method,
            pathname: req._parsedUrl.pathname,
            query: query.toString(),
            requestTimestamp: req.timestamp
        };
        return await this.movieService.searchMovie(movieRequest);
    }
};
__decorate([
    common_1.Get('search'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "search", null);
__decorate([
    common_1.Get('detail'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "detailSearch", null);
MovieController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [movie_service_1.MovieService])
], MovieController);
exports.MovieController = MovieController;
//# sourceMappingURL=movie.controller.js.map