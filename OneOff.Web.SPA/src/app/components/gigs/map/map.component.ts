import { MapService } from './../../../services/map.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private _mapService: MapService) { }

  ngOnInit() {
    this._mapService.drawMap();
  }

}
