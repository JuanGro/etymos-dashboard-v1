import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { environment } from './../environments/environment';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {}

  get(urlGET: string) {
    return this.http.get(environment.API_URL + urlGET);
  }

  post(urlPOST: string, postObject: any) {
    return this.http.post(environment.API_URL + urlPOST, postObject);
  }
}
