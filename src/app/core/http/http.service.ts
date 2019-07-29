import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() {}

  public handleError(err): Observable<never> {
    return throwError(err);
  }

  public createApiUrl(path: string) {
    return `${environment.apiUrl}/${path}`;
  }
}
