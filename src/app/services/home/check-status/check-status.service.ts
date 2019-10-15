import {
  Injectable
} from '@angular/core';
import {
  HttpHeaders,
  HttpClient
} from '@angular/common/http';
import {
  environment
} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CheckStatusService {

  constructor(private http: HttpClient) {}

  getApplicationStatus(applicationID) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
      })
    };

    return this.http.get < any[] > (environment.apiSolaTech + 'loanapplication/status?applicationId=' + applicationID, httpOptions);
  }

}
