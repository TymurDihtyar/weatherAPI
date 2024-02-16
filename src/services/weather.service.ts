import https from "node:https";

import { configs } from "../configs/config";
import { IParams } from "../interfaces/params.interface";
import { IWeatherData } from "../interfaces/weatherData.interface";

class WeatherService {
  public async getWeather(params: IParams): Promise<IWeatherData> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${params.city}&units=metric&APPID=${configs.API_KEY}`;

    return new Promise((resolve, reject) => {
      https.get(url, (res) => {
        console.log("statusCode:", res.statusCode);

        res
          .on("data", (data) => {
            resolve(JSON.parse(data));
          })
          .on("error", (error) => {
            reject(error);
          });
      });
    });
  }
}

export const weatherService = new WeatherService();
