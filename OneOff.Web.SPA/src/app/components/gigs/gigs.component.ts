import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit, AfterViewInit } from '@angular/core';

import { MapService } from './../../services/map.service';

@Component({
  selector: 'app-gigs',
  templateUrl: './gigs.component.html',
  styleUrls: ['./gigs.component.css']
})
export class GigsComponent implements OnInit {
  gigForm: FormGroup;

  constructor(
    private _form: FormBuilder,
    private _mapService: MapService) {
    this.createForm();
  }

  ngOnInit() {
    this._mapService.drawMap();
  }

  ngOnViewInit() {

  }

  createForm() {
    this.gigForm = this._form.group({
      venue: new FormControl,
      date: new FormControl,
      city: new FormControl,
      state: new FormControl,
      zip: new FormControl
    });
  }

  onAdd(form) {
    this._mapService.geoCode(form);
  }

  onSubmit(form) {
    this._mapService.geoCode(form);
  }



}
