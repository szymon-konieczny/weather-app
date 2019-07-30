import { Injectable } from '@angular/core';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  public parseDate(date?: string, format = 'YYYY-MM-DD'): string {
    return moment(date).format(format);
  }

  public isToday(date: string) {
    const currentDate = this.parseDate();
    return this.parseDate(date) === this.parseDate(currentDate);
  }
}
