import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpService } from './http.service';
import { DateService } from '../services/date.service';
import { ICityRes, IWeatherDataRes } from 'src/app/shared/interfaces/weather-widget.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherHttpService {

  constructor(
    private http: HttpClient,
    private httpService: HttpService,
    private dateService: DateService,
  ) {}

  public loadCitiesList(): Observable<ICityRes[]> {
    return this.http.get<ICityRes[]>(this.httpService.createApiUrl('city')).pipe(
      catchError(error => this.httpService.handleError(error)),
    );
  }

  public getSelectedCityData(cityId: number): Observable<IWeatherDataRes> {
    const currentDay = this.dateService.parseDate();
    return this.http.get<IWeatherDataRes>(this.httpService.createApiUrl(`city/${cityId}/weather?date=${currentDay}`)).pipe(
      catchError(error => this.httpService.handleError(error)),
    );
  }
}
