import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http/';

const mapBoxToken = environment.MAPBOX_API_KEY;
const googleToken = environment.GOOGLE_API_KEY;

const google_URL = 'https://maps.googleapis.com/maps/api/geocode/json?address=';

declare var L: any;

const defaultCoords: number[] = [39.97, 86];
const defaultZoom = 8;

@Injectable()
export class MapService {

  constructor(private _http: HttpClient) { }

  drawMap() {
    const map = L.map('map').setView([39.9668, -86.0086], 10);

    map.maxZoom = 100;

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      // tslint:disable-next-line:max-line-length
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: mapBoxToken
    }).addTo(map);
  }

  geoCode(form) {
    const queryString = google_URL + form.value.zip + '&key=' + googleToken;
    console.log(form);
    console.log(queryString);
    return this._http.get(queryString).subscribe(data =>
      console.log(data.results.geometry.location));
  }

}
