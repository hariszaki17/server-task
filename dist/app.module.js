"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const movie_request_log_entity_1 = require("./movie-request-log/movie-request-log.entity");
const movie_request_log_module_1 = require("./movie-request-log/movie-request-log.module");
const movie_request_log_service_1 = require("./movie-request-log/movie-request-log.service");
const movie_controller_1 = require("./movie/movie.controller");
const movie_module_1 = require("./movie/movie.module");
const auth_module_1 = require("./auth/auth.module");
const auth_middleware_1 = require("./middleware/auth.middleware");
const request_flag_middleware_1 = require("./middleware/request-flag.middleware");
const movie_service_1 = require("./movie/movie.service");
const api_service_1 = require("./api/api.service");
const api_module_1 = require("./api/api.module");
const dotenv = require("dotenv");
dotenv.config();
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(request_flag_middleware_1.RequestFlagMiddleware, auth_middleware_1.AuthMiddleware).forRoutes('');
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'Str0ngP@ss',
                database: 'movie',
                entities: [movie_request_log_entity_1.MovieRequestLog],
                synchronize: true,
            }),
            movie_request_log_module_1.MovieRequestLogModule,
            movie_module_1.MovieModule,
            auth_module_1.AuthModule,
            common_1.HttpModule,
            api_module_1.ApiModule,
        ],
        controllers: [app_controller_1.AppController, movie_controller_1.MovieController],
        providers: [app_service_1.AppService, movie_request_log_service_1.MovieRequestLogService, movie_service_1.MovieService, api_service_1.ApiService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map