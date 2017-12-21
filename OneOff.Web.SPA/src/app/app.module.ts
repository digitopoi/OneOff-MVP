import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { GigIndexComponent } from './components/gig/gig-index/gig-index.component';
import { GigCreateComponent } from './components/gig/gig-create/gig-create.component';
import { GigEditComponent } from './components/gig/gig-edit/gig-edit.component';
import { GigDeleteComponent } from './components/gig/gig-delete/gig-delete.component';
import { LandingComponent } from './components/landing/landing.component';


import { AuthService } from './services/auth.service';
import { GigsService } from './services/gigs.service';

const routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'gigs', children: [
    { path: '', component: GigIndexComponent },
    { path: 'create', component: GigCreateComponent },
    { path: 'edit/:id', component: GigEditComponent },
    { path: 'delete/:id', component: GigDeleteComponent },
  ]},
  { path: '**', component: LandingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    GigIndexComponent,
    GigCreateComponent,
    GigEditComponent,
    GigDeleteComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    GigsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
