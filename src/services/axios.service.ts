import axios, { AxiosResponse } from "axios";

import { configs } from "../configs/config";
import { ICity } from "../interfaces/city.interface";
import { IWeatherData } from "../interfaces/weatherData.interface";

const geoUrl = `${configs.BASE_URL}${configs.BASE_URL_GEO}`;
const dataUrl = `${configs.BASE_URL}${configs.BASE_URL_DATA}`;

const axiosService = {
  getCityGeo: (q: string, appid: string): Promise<AxiosResponse<ICity[]>> => axios.get(geoUrl, { params: { q, appid } }),
  getWeather: (lon: number, lat: number, appid: string, units: string): Promise<AxiosResponse<IWeatherData>> => axios.get(dataUrl, { params: { lon, lat, appid, units } }),
};

export { axiosService };
