import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppUserService } from './servicre/appUser.service';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddAppUserComponent } from './add-app-user/add-app-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'registration/add',component:AddAppUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
