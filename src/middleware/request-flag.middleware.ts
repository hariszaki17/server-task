import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class RequestFlagMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    req.timestamp = new Date()
    next();
  }
}
