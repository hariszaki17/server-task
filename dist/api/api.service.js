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
exports.ApiService = void 0;
const common_1 = require("@nestjs/common");
let ApiService = class ApiService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async getDataDetail(query) {
        const response = await this.httpService.
            get(`http://www.omdbapi.com/?apikey=c799f574&${query}`)
            .toPromise();
        const data = response.data;
        return data;
    }
    async getDataSearch(query) {
        const response = await this.httpService.
            get(`http://www.omdbapi.com/?apikey=c799f574&${query}`)
            .toPromise();
        const data = response.data;
        return data;
    }
};
ApiService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], ApiService);
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map