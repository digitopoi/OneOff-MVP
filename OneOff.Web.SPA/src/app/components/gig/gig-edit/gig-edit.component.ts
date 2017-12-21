import { ActivatedRoute } from '@angular/router';
import { GigsService } from './../../../services/gigs.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Gig } from '../../../models/Gig';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gig-edit',
  templateUrl: './gig-edit.component.html',
  styleUrls: ['./gig-edit.component.css']
})
export class GigEditComponent implements OnInit {

  gig: Gig;
  editGigForm: FormGroup;
  constructor(private _form: FormBuilder,
              private _gigService: GigsService,
              private _ar: ActivatedRoute,
              private _router: Router) {

    this._ar.paramMap.subscribe(p => {
      this._gigService.getGig(p.get('id')).subscribe((singleGig: Gig) => {
        this.gig = singleGig;
        this.createForm();
      });
    });
  }

  ngOnInit() {
  }

  createForm() {
    this.editGigForm = this._form.group({
      gigId: new FormControl(this.gig.GigId),
      venueName: new FormControl(this.gig.VenueName),
      date: new FormControl(this.gig.Date),
      city: new FormControl(this.gig.City),
      state: new FormControl(this.gig.State),
      zip: new FormControl(this.gig.Zip),
    });
  }

  onSubmit(form) {
    const updateGig: Gig = {
      GigId: form.value.gigId,
      VenueName: form.value.venueName,
      Date: form.value.date,
      City: form.value.city,
      State: form.value.state,
      Zip: form.value.zip,
    };
    this._gigService.updateGig(updateGig).subscribe(d => {
      this._router.navigate(['/gigs']);
    });
  }

}
