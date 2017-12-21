import { Gig } from '../models/Gig';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const Api_Url = 'http://localhost:63577';

@Injectable()
export class GigsService {

    constructor(private _http: HttpClient) { }

    getGigs() {
        return this._http.get<Gig[]>(`${Api_Url}/Gig`, { headers: this.getHeaders() });
    }

    createGig(gig: Gig) {
        return this._http.post(`${Api_Url}/Gig`, gig, { headers: this.getHeaders()});
    }

    getGig(id: string) {
        return this._http.get(`${Api_Url}/Gig/${id}`, {headers: this.getHeaders() });
    }

    updateGig(gig: Gig) {
        return this._http.put(`${Api_Url}/Gig`, gig, { headers: this.getHeaders() });
    }

    deleteGig(id: number) {
        return this._http.delete(`${Api_Url}/Gigs/${id}`, { headers: this.getHeaders() });
    }

    private getHeaders() {
        return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
    }

}
