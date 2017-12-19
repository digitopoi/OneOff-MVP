import { RegisterUser } from './../models/RegisterUser';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Token } from '../models/token';
import { CookieXSRFStrategy } from '@angular/http/src/backends/xhr_backend';
import { Router } from '@angular/router';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/map';

const Api_Url = 'http://localhost:63577';

@Injectable()
export class AuthService {

  isLoggedIn = new Subject<boolean>();

  constructor(
    private _http: HttpClient,
    private _router: Router) { }

  register(regUserData: RegisterUser) {
    return this._http.post(`${Api_Url}/api/Account/Register`, regUserData);
  }

  login(loginInfo) {
    const eu = encodeURI(loginInfo.email);
    const ep = encodeURI(loginInfo.password);
    const str = `grant_type=password&username=${eu}&password=${ep}`;

    return this._http.post(`${Api_Url}/Token`, str).subscribe((token: Token) => {
      localStorage.setItem('id_token', token.access_token);
      this.isLoggedIn.next(true);
      this._router.navigate(['/gigs']);
    });
  }

  currentUser(): Observable<Object> {
    if (!localStorage.getItem('id_token')) { return new Observable(observer => observer.next(false)); }

    const authHeader = this.setHeader();

    return this._http.get(`${Api_Url}/api/Account/UserInfo`, { headers: authHeader }).map(v => v);
  }

  logout() {
    localStorage.clear();
    this.isLoggedIn.next(false);

    const authHeader = this.setHeader();

    this._http.post(`${Api_Url}/api/Account/Logout`, { headers: authHeader } );

    this._router.navigate(['/login']);
  }

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

}
