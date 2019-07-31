import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { WeatherWidgetComponent } from './components/weather-widget/weather-widget.component';
import { WeatherTypePipe } from './pipes/weather-type.pipe';

@NgModule({
  declarations: [WeatherWidgetComponent, WeatherTypePipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    WeatherWidgetComponent,
  ]
})
export class SharedModule { }
