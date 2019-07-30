import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as MAT_MODULES from '@angular/material';

import { WeatherWidgetComponent } from './components/weather-widget/weather-widget.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WeatherTypePipe } from './pipes/weather-type.pipe';

const materialModules = [
  MAT_MODULES.MatInputModule,
  MAT_MODULES.MatFormFieldModule,
  MAT_MODULES.MatAutocompleteModule,
];

@NgModule({
  declarations: [WeatherWidgetComponent, WeatherTypePipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ...materialModules,
  ],
  exports: [
    ...materialModules,
    CommonModule,
    ReactiveFormsModule,
    WeatherWidgetComponent,
  ]
})
export class SharedModule { }
