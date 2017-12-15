//  Angular Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpModule } from '@angular/http';

//  Material Components
import {
        MatToolbarModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule
} from '@angular/material';

//  Angular Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LandingComponent } from './components/landing/landing.component';
import { GigsComponent } from './components/gigs/gigs.component';
import { UserInputComponent } from './components/gigs/user-input/user-input.component';
import { MapComponent } from './components/gigs/map/map.component';

//  Services
import { AuthService } from './services/auth.service';
import { MapService } from './services/map.service';

const routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'gigs', component: GigsComponent },
  { path: 'register', component: RegistrationComponent },
  { path: '**', component: LandingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    LandingComponent,
    MapComponent,
    GigsComponent,
    UserInputComponent,
    // MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    AngularFontAwesomeModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
