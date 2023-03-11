import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AppUserDTO } from '../interface/app-user-dto';
import { User } from '../Auth/login/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiServerUrl = "http://localhost:8080/api/v1";

  constructor(private http: HttpClient,
    private router:Router
    ){}

  public loginUser(user:User): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/registration/login`,user)
  }

  isUserLoggedAndAccessTokenValid(): boolean {
    if(localStorage.getItem('currentUser'))
    {
      return true
    }
  this.router.navigate(['login']);
    return false;
  }

  logoutUser() {
    localStorage.removeItem('currentUser');
  }

}

