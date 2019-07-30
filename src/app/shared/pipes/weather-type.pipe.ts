import { Pipe, PipeTransform } from '@angular/core';

import { WeatherTypes } from '../interfaces/weather-widget.interface';

@Pipe({
  name: 'weatherType'
})
export class WeatherTypePipe implements PipeTransform {
  public transform(weatherType: string): string {
    return WeatherTypes[weatherType];
  }
}
