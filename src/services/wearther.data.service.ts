import { AxiosResponse } from "axios";

import { urls } from "../constants/urls";
import { ICity } from "../interfaces/city.interface";
import { IWeatherData } from "../interfaces/weatherData.interface";
import { axiosService } from "./axios.service";

type IRes<T> = Promise<AxiosResponse<T>>;

const weatherDataService = {
  getCityData: (q: string, appid: string): IRes<ICity> => axiosService.get(urls.geo, { params: { q, appid } }),
  getWeather: (lat: number, lon: number, appid: string): IRes<IWeatherData> => axiosService.get(urls.data, { params: { lat, lon, appid } }),
};

export { weatherDataService };
