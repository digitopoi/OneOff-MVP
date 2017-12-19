import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public _headers = new HttpHeaders();
  public loginForm: FormGroup;

  constructor(private _form: FormBuilder, private _authService: AuthService, private _router: Router) {
    this.createForm();
  }

  ngOnInit() { }

  createForm() {
    this.loginForm = this._form.group({
      email: new FormControl,
      password: new FormControl
    });
  }

  onSubmit(form) {
    this._authService.login(form.value);
  }
}
