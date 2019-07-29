import { Injectable } from '@angular/core';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() {}

  public getCurrentDay() {
    return moment().format('YYYY-MM-DD');
  }
}
