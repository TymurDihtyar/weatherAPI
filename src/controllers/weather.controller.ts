import { NextFunction, Request, Response } from "express";

import { IQuery } from "../interfaces/query.interface";
import { WeatherPresenter } from "../presenter/weather.presenter";
import { weatherService } from "../services/weather.service";

class WeatherController {
  public async getWeather(req: Request, res: Response, next: NextFunction) {
    try {
      const weather = await weatherService.getWeather(res.locals as IQuery);

      return res.json({ data: WeatherPresenter.weatherToResponse(weather) });
    } catch (e) {
      next(e);
    }
  }
}

export const weatherController = new WeatherController();
