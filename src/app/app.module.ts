import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddAppUserComponent } from './add-app-user/add-app-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [

    AppComponent,
    LoginComponent,
    RegistrationComponent,
    AddAppUserComponent,
    DashboardComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
