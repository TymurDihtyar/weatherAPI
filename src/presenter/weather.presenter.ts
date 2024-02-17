import { IWeatherData } from "../interfaces/weatherData.interface";

export class WeatherPresenter {
  public static weatherToResponse(weather: IWeatherData) {
    return {
      weather: weather.weather,
      main: weather.main,
      visibility: weather.visibility,
      wind: weather.wind,
      clouds: weather.clouds,
      sys: weather.sys,
      name: weather.name,
    };
  }
}
