import { NextFunction, Request, Response } from "express";

class WeatherController {
  public async getWeather(req: Request, res: Response, next: NextFunction) {
    try {
      const weather = await weatherService.getWeather(res.locals);

      return res.json(weather);
    } catch (e) {
      next(e);
    }
  }
}

export const weatherController = new WeatherController();
