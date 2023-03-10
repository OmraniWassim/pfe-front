import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppUserService } from './service/appUser.service';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ApplicationGuardService } from './service/guard/application-guard.service';
import { NavbarComponent } from './navbar/navbar.component';
import { PlantSectionComponent } from './pages/plant-section/plant-section.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path:'login',
  component:LoginComponent
},
  {
    path:'registration',
    component:RegistrationComponent
  },
  
  
  {
    path:'navbar',
    component:NavbarComponent,
    canActivate:[ApplicationGuardService],
   },

   {
    path:'menu',
  component:MenuComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
