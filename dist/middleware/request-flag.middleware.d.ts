import { NestMiddleware } from '@nestjs/common';
export declare class RequestFlagMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void): void;
}
