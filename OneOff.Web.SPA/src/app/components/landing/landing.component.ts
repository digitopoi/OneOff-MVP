import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  // onLogin() {
  //   this._authService.login();
  // }
  // onVenueRegister() {
  //   this._authService.venueLogin();
  // }
  // onArtistRegister() {
  //   this._authService.artistLogin();
  // }
}
