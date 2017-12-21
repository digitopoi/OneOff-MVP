import { GigsService } from './../../../services/gigs.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Gig } from '../../../models/Gig';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gig-create',
  templateUrl: './gig-create.component.html',
  styleUrls: ['./gig-create.component.css']
})
export class GigCreateComponent implements OnInit {

  gigForm: FormGroup;

  constructor(
    private _gigsService: GigsService,
    private _form: FormBuilder,
    private _router: Router) {
      this.createForm();
    }

  ngOnInit() {
  }

  createForm() {
    this.gigForm = this._form.group({
      venueName: new FormControl,
      date: new FormControl,
      city: new FormControl,
      state: new FormControl,
      zip: new FormControl,
    });
  }

  onSubmit() {
    this._gigsService.createGig(this.gigForm.value).subscribe(data => {
      this._router.navigate(['/gigs']);
    });
  }

}
