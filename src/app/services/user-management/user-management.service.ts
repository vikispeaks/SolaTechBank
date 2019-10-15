import {
  Injectable
} from '@angular/core';
import {
  HttpHeaders,
  HttpClient
} from '@angular/common/http';

@Injectable()
export class UserManagementService {

  constructor(private http: HttpClient) { }

  createUser(inputObj, authKey) {
    const httpOptions = {
      headers: new HttpHeaders({
        'api-version': '1',
        'Content-Type': 'application/json',
        'Authorization': authKey
      })
    };

    return this.http.post('/user', inputObj, httpOptions);
  }

}
