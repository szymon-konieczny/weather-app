export enum WeatherTypes {
  RainLight = 'rain_light',
  Cloudy = 'cloudy',
  PartlyCloudy = 'partly_cloudy',
  RainSCloudy = 'rain_s_cloudy',
  Sunny = 'sunny',
}

export interface ICity {
  id: number;
  name: string;
}

export interface IWindowInfo {
  speed: number;
  direction: string;
}

export interface IWeatherDataResponse {
  cityId: number;
  date: Date;
  temperature: number;
  precipitation: number;
  humidity: number;
  windInfo: IWindowInfo;
  pollenCount: number;
  type: string;
}
