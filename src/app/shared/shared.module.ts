import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherWidgetComponent } from './components/weather-widget/weather-widget.component';



@NgModule({
  declarations: [WeatherWidgetComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
