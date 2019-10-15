import { Injectable } from '@angular/core';
import {
  HttpHeaders,
  HttpClient
} from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfferResponseService {

  constructor(private http: HttpClient) { }

  repondToOffer(responseData: any) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    // tslint:disable-next-line:max-line-length
    return this.http.post(environment.apiSolaTech + 'loanapplication', responseData, httpOptions);
  }

}
