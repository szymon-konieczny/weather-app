import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Observable, Subject } from 'rxjs';
import { filter, tap, takeUntil } from 'rxjs/operators';

import { WeatherHttpService } from '../../../core/http/weather-http.service';
import { ICityRes, IWeatherDataRes } from '../../interfaces/weather-widget.interface';
import { DateService } from '../../../core/services/date.service';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent implements OnInit, OnDestroy {
  private DEFAULT_CITY_ID = 1;
  private selectedCityId = this.DEFAULT_CITY_ID;
  private destroy$ = new Subject<void>();

  public cities$: Observable<ICityRes[]>;
  public currentDayWeather: IWeatherDataRes;
  public weatherForm: FormGroup;
  public selectedCityWeatherData$: Observable<IWeatherDataRes>;

  constructor(
    private fb: FormBuilder,
    public dateService: DateService,
    private weatherHttpService: WeatherHttpService,
  ) {}

  get cityId() {
    return this.weatherForm.get('cityId') as FormGroup;
  }

  public ngOnInit(): void {
    this.weatherForm = this.createForm();
    this.cities$ = this.weatherHttpService.loadCitiesList();

    this.setSelectedCityData(this.selectedCityId);

    this.cityId.valueChanges.pipe(
      filter(data => !!data),
      takeUntil(this.destroy$),
    ).subscribe(cityId => this.setSelectedCityData(cityId));
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private setSelectedCityData(cityId: number): void {
    this.selectedCityWeatherData$ = this.weatherHttpService.getSelectedCityData(cityId).pipe(
      tap(weatherData => this.currentDayWeather = weatherData[0]),
    );
  }

  private createForm(): FormGroup {
    return this.fb.group({
      cityId: [this.DEFAULT_CITY_ID],
    });
  }
}
