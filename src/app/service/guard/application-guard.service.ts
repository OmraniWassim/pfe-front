import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class ApplicationGuardService implements CanActivate{

  constructor(private loginsservice: LoginService) {
    
   }
  canActivate(
    route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): boolean
      | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   return this.loginsservice.isUserLoggedAndAccessTokenValid();
  }
}
