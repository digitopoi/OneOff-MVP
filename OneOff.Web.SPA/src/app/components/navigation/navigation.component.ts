import { UserInfo } from './../../models/UserInfo';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  username: string;
  isLoggedIn: boolean;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.authService.currentUser().subscribe((userInfo: UserInfo) => {
      if (userInfo) {
        this.isLoggedIn = true;
        this.username = userInfo.email;
      } else {
        this.isLoggedIn = false;
      }
    });

    this.authService.isLoggedIn.subscribe(v => this.isLoggedIn = v);
  }

  onLogoutClicked() {
    this.authService.logout();
  }

}
