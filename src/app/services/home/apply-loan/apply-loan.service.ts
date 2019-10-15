import { Injectable } from '@angular/core';
import {
  HttpHeaders,
  HttpClient
} from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApplyLoanService {

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

}
