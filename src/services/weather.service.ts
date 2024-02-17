import { configs } from "../configs/config";
import { IQuery } from "../interfaces/query.interface";
import { IWeatherData } from "../interfaces/weatherData.interface";
import { axiosService } from "./axios.service";

class WeatherService {
  public async getWeather(params: IQuery): Promise<IWeatherData> {
    if (params.city) {
      const responseCity = await axiosService.getCityGeo(params.city, configs.API_KEY);
      const { lat, lon } = responseCity.data[0];
      const responseData = await axiosService.getWeather(lat, lon, configs.API_KEY, configs.TYPE_DATA);
      return responseData.data;
    }
    if (params.lon && params.lat) {
      const responseData = await axiosService.getWeather(params.lat, params.lon, configs.API_KEY, configs.TYPE_DATA);
      return responseData.data;
    }
  }
}

export const weatherService = new WeatherService();
