import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public handleError(err: Error): Observable<never> {
    return throwError(err);
  }

  public createApiUrl(path: string): string {
    return `${environment.apiUrl}/${path}`;
  }
}
