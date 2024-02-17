import { NextFunction, Request, Response } from "express";

import { ApiError } from "../errors/api.error";
import { IQuery } from "../interfaces/query.interface";

class ParamsMiddleware {
  public async checkParams(req: Request, res: Response, next: NextFunction) {
    try {
      const param = req.query as IQuery;

      if (param.city && param.lon && param.lat) {
        throw new ApiError("Choose only city name or city lat-lon", 400);
      }

      if (!Object.keys(param).length) {
        throw new ApiError("Nothing in params", 400);
      }

      if (param.city && (param.lon || param.lat)) {
        throw new ApiError("You cant use city name and city lat or city name and city lon", 400);
      }

      if ((param.lon && !param.lat) || (!param.lon && param.lat)) {
        throw new ApiError("You cant use only one lon or lat", 400);
      }

      res.locals = param;

      next();
    } catch (e) {
      next(e);
    }
  }
}

export const paramsMiddleware = new ParamsMiddleware();
