import { configs } from "../configs/config";
import { ApiError } from "../errors/api.error";
import { IQuery } from "../interfaces/query.interface";
import { IWeatherData } from "../interfaces/weatherData.interface";
import { axiosService } from "./axios.service";

class WeatherService {
  public async getWeather(params: IQuery): Promise<IWeatherData> {
    if (params.q) {
      const responseCity = await axiosService.getCityGeo(params.q, configs.API_KEY);
      if (responseCity.data.length) {
        const { lon, lat } = responseCity.data[0];
        return this.getResponseData(lon, lat, configs.API_KEY, configs.TYPE_DATA);
      }
      throw new ApiError("Wrong city name", 400);
    }
    if (params.lon && params.lat) {
      return this.getResponseData(+params.lon, +params.lat, configs.API_KEY, configs.TYPE_DATA);
    }
  }

  private async getResponseData(lon: number, lat: number, apiKey: string, dataType: string): Promise<IWeatherData> {
    const responseData = await axiosService.getWeather(lon, lat, apiKey, dataType);
    return responseData.data;
  }
}

export const weatherService = new WeatherService();
