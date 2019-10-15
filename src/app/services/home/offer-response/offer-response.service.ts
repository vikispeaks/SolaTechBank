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

  getApplicationStatus(token: any) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };

    return this.http.get<any[]>(environment.apiSolaTech + '/applicationID', httpOptions);
  }

  sendOfferResponse(providerIdDetail: any, token: any) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };

    // tslint:disable-next-line:max-line-length
    return this.http.post(environment.apiSolaTech + '/api/v1/users/add-provider-identity', providerIdDetail, httpOptions);
  }


}
