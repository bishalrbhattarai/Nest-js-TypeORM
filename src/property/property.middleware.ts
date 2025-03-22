import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class PropertyMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(req.body)
    console.log("Running Propety Default Middleware")
    next();
  }
}
