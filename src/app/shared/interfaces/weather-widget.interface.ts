export enum WeatherTypes {
  RainLight = 'rain_light',
  Cloudy = 'cloudy',
  PartlyCloudy = 'partly_cloudy',
  RainAndCloudy = 'rain_s_cloudy',
  Sunny = 'sunny',
}

export interface ICityRes {
  id: number;
  name: string;
}

export interface IWindowInfo {
  speed: number;
  direction: string;
}

export interface IWeatherDataRes {
  cityId: number;
  date: string;
  temperature: number;
  precipitation: number;
  humidity: number;
  windInfo: IWindowInfo;
  pollenCount: number;
  type: string;
}
