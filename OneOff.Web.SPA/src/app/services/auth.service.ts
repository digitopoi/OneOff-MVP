import { HttpClient } from '@angular/common/http';
import { RegisterUser } from './../models/RegisterUser';
import { Injectable } from '@angular/core';

const Api_Url = 'http://localhost:63577/api';
@Injectable()
export class AuthService {

  constructor(private _http: HttpClient) { }

  register(regUserData: RegisterUser) {
    return this._http.post(`${Api_Url}/Account/Register`, regUserData);
  }
}
