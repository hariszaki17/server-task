"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
let AuthService = class AuthService {
    constructor() {
        this.apiKeys = [
            'ca03na188ame03u1d78620de67282882a84',
            'd2e621a6646a4211768cd68e26f21228a81',
        ];
    }
    validateApiKey(apiKey) {
        return this.apiKeys.find(apiK => apiKey === apiK);
    }
};
AuthService = __decorate([
    common_1.Injectable()
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map