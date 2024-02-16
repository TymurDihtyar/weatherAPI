import https from "node:https";

import { configs } from "../configs/config";
import { IParams } from "../interfaces/params.interface";

class WeatherService {
  public async getWeather(params: IParams) {
    let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&APPID=${configs.API_KEY}`;

    if (params.city) {
      url += `&q=${params.city}`;
    } else if (params.lat && params.lon) {
      url += `&lat=${params.lat}&lon=${params.lon}`;
    }

    return new Promise((resolve, reject) => {
      https.get(url, (res) => {
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
