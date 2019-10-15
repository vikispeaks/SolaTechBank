import {
  Injectable
} from '@angular/core';
import {
  HttpHeaders,
  HttpClient
} from '@angular/common/http';

@Injectable()
export class TransactionViewService {

  constructor(private http: HttpClient) { }

  getTransactionsList() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.get('gettransactioncount', httpOptions);
  }

}
