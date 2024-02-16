import { NextFunction, Request, Response } from "express";

import { ApiError } from "../errors/api.error";

class ParamsMiddleware {
  public async checkParams(req: Request, res: Response, next: NextFunction) {
    try {
      const param = req.query;

      if (!Object.keys(param).length) {
        throw new ApiError("Nothing params", 400);
      }

      res.locals = param;

      next();
    } catch (e) {
      next(e);
    }
  }
}

export const paramsMiddleware = new ParamsMiddleware();
