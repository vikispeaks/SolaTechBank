import {
  Injectable
} from '@angular/core';

import {
  HttpHeaders,
  HttpClient
} from '@angular/common/http';

@Injectable()

export class AuthService {

  constructor(private http: HttpClient) { }

  loginUser(userDetail) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    return this.http.post('/token', userDetail, httpOptions);
  }

}
