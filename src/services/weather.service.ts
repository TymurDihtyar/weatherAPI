import { configs } from "../configs/config";
import { ApiError } from "../errors/api.error";
import { IQuery } from "../interfaces/query.interface";
import { IWeatherData } from "../interfaces/weatherData.interface";
import { axiosService } from "./axios.service";

class WeatherService {
  public async getWeather(params: IQuery): Promise<IWeatherData> {
    if (params.city) {
      const responseCity = await axiosService.getCityGeo(params.city, configs.API_KEY);
      if (responseCity.data.length) {
        const { lat, lon } = responseCity.data[0];
        return this.getResponseData(lat, lon, configs.API_KEY, configs.TYPE_DATA);
      }
      throw new ApiError("Wrong city name", 400);
    }
    if (params.lon && params.lat) {
      return this.getResponseData(params.lat, params.lon, configs.API_KEY, configs.TYPE_DATA);
    }
  }

  private async getResponseData(lat: number, lon: number, apiKey: string, dataType: string): Promise<IWeatherData> {
    const responseData = await axiosService.getWeather(lat, lon, apiKey, dataType);
    return responseData.data;
  }
}

export const weatherService = new WeatherService();
