import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {

  private _gigForm: FormGroup;

  constructor(private _form: FormBuilder) { }

  ngOnInit() {
  }

  createForm() {
    this._gigForm = this._form.group({
      venue: new FormControl,
      date: new FormControl,
      city: new FormControl,
      state: new FormControl,
      zip: new FormControl
    });
  }

  onSubmit() {
    console.log(this._gigForm.value);
  }

}
