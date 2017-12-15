import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const apiToken = environment.MAPBOX_API_KEY;

declare var L: any;

const defaultCoords: number[] = [39.97, -86];
const defaultZoom = 8;

@Injectable()
export class MapService {

  constructor() { }

  drawMap() {
    const map = L.map('map').setView(defaultCoords, defaultZoom);

    map.maxZoom = 100;

    L.tileLayer('https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      // tslint:disable-next-line:max-line-length
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.dark',
      accessToken: apiToken
    }).addTo(map);
  }
  
}
