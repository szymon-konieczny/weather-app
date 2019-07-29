import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpService } from './http.service';
import { DateService } from '../services/date.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherHttpService {

  private readonly CURRENT_DAY = '2019-07-30';

  constructor(
    private http: HttpClient,
    private httpService: HttpService,
    private dateService: DateService,
  ) {}

  public loadCitiesList(): Observable<any[]> {
    return this.http.get<any[]>(this.httpService.createApiUrl('city')).pipe(
      catchError(error => this.httpService.handleError(error)),
    );
  }

  public getSelectedCityData(cityId: number): Observable<any> {
    const currentDay = this.dateService.getCurrentDay();
    return this.http.get<any>(this.httpService.createApiUrl(`city/${cityId}/weather?date=${currentDay}`)).pipe(
      catchError(error => this.httpService.handleError(error)),
    );
  }
}
