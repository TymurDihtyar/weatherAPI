import { NextFunction, Request, Response } from "express";

import { ApiError } from "../errors/api.error";

class ParamsMiddleware {
  public async checkParams(req: Request, res: Response, next: NextFunction) {
    try {
      const param = req.query;

      if (!param) {
        throw new ApiError("wrong params", 400);
      }

      res.locals = param;

      next();
    } catch (e) {
      next(e);
    }
  }
}

export const paramsMiddleware = new ParamsMiddleware();
