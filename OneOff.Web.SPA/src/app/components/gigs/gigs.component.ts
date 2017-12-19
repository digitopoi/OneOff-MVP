import { Component, OnInit, AfterViewInit } from '@angular/core';

import { MapService } from './../../services/map.service';

@Component({
  selector: 'app-gigs',
  templateUrl: './gigs.component.html',
  styleUrls: ['./gigs.component.css']
})
export class GigsComponent implements OnInit {

  constructor(private _mapService: MapService) { }

  ngOnInit() {
    this._mapService.drawMap();
  }

  ngOnViewInit() {
  }

}
