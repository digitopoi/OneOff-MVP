import { RegisterUser } from './../models/RegisterUser';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const Api_Url = 'http://localhost:63577/';

@Injectable()
export class AuthService {

  constructor(private _http: HttpClient) { }

  register(regUserData: RegisterUser) {
    return this._http.post(`${Api_Url}/api/Account/Register`, regUserData);
  }

}
