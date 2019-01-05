import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { environment } from './../environments/environment';
import { ToasterService } from './toaster.service';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient, private toasterService: ToasterService) {}

  get(urlGET: string) {
    return this.http.get(environment.API_URL + urlGET)
      .pipe(
        catchError(err => {
          this.toasterService.showError("Error", "Hubo un error en la petición GET");
          return throwError(err);
          }))
  }

  post(urlPOST: string, postObject: any) {
    return this.http.post(environment.API_URL + urlPOST, postObject)
      .pipe(
        catchError(err => {
          this.toasterService.showError("Error", "Hubo un error en la petición POST");
          return throwError(err);
        }));
  }
}
