import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private _form: FormBuilder,
    private _authService: AuthService,
    private _router: Router) {

    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.registerForm = this._form.group({
      email: new FormControl,
      username: new FormControl,
      password: new FormControl,
      confirmPassword: new FormControl
    });
  }

  onSubmit(form) {
    this._authService
      .register(form.value)
      .subscribe( value => {
        this._authService.login(form.value);
        this._router.navigate(['gigs']);
      });

    console.log(this.registerForm.value);
  }

}
