import { HttpModule, HttpService, Module } from '@nestjs/common';
import { ApiService } from './api.service';

@Module({
    imports: [HttpModule],
    exports: [HttpModule],
    providers: [ApiService]
})
export class ApiModule {}
