"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieRequestLogModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const movie_request_log_repository_1 = require("./movie-request-log.repository");
const movie_request_log_service_1 = require("./movie-request-log.service");
let MovieRequestLogModule = class MovieRequestLogModule {
};
MovieRequestLogModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([movie_request_log_repository_1.MovieRequestLogRepository])
        ],
        exports: [
            typeorm_1.TypeOrmModule
        ],
        providers: [movie_request_log_service_1.MovieRequestLogService]
    })
], MovieRequestLogModule);
exports.MovieRequestLogModule = MovieRequestLogModule;
//# sourceMappingURL=movie-request-log.module.js.map