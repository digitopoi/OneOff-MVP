import { Token } from './../models/Token';
import { HttpClient } from '@angular/common/http';
import { RegisterUser } from './../models/RegisterUser';
import { Injectable } from '@angular/core';

const Api_Url = 'http://localhost:63577';
@Injectable()
export class AuthService {

  constructor(private _http: HttpClient) { }

  register(regUserData: RegisterUser) {
    return this._http.post(`${Api_Url}/api/Account/Register`, regUserData);
  }

  login(loginInfo) {
    const string =
      `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;

    return this._http.post(`@{Api_Url}/token`, string).subscribe( (token: Token) => {
      localStorage.setItem('id_token', token.access_token);
    })
  }
}
