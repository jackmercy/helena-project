import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
};

@Injectable()
export class CoreService {
    private loginUrl = '/api/login';

    constructor(private _http: HttpClient) { }

    getAllUser(): Observable<any> {
        return this._http.get(this.loginUrl, httpOptions)
                    .map( res => {
                        return res;
                    });
    }

    login(username: string, role: string): Observable<any> {
        return this._http.post(this.loginUrl, JSON.stringify({username: username, role: role}), httpOptions)
                    .map((response: Response) => {
                        const user = response;

                        /* if (user && user['accessToken']) {
                            sessionStorage.setItem('currentUser', JSON.stringify(user));
                        } */

                        return user;
                    });
    }
}
