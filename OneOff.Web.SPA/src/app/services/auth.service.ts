import { Subject } from 'rxjs/Subject';
import { Token } from './../models/Token';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterUser } from './../models/RegisterUser';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

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
    const string =
      `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;

    return this._http.post(`${Api_Url}/token`, string).subscribe( (token: Token) => {
      localStorage.setItem('id_token', token.access_token);
      this.isLoggedIn.next(true);
      this._router.navigate(['/gigs']);
    });
  }

  currentUser(): Observable<Object> {
    if (!localStorage.getItem('id_token')) { return new Observable(observer => observer.next(false)); }

    const authHeader = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);

    return this._http.get(`${Api_Url}/api/Account/UserInfo`, { headers: authHeader });
  }

}
