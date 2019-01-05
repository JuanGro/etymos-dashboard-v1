import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { environment } from './../environments/environment';
import { ErrorService } from './error.service';

@Injectable()
export class HttpService extends ErrorService {

  constructor(private http: HttpClient) {
    super();
  }

  get(urlGET: string) {
    return this.http.get(environment.API_URL + urlGET)
      .pipe(catchError(this.handleError));
  }

  post(urlPOST: string, postObject: any) {
    return this.http.post(environment.API_URL + urlPOST, postObject)
      .pipe(catchError(this.handleError));
  }
}
