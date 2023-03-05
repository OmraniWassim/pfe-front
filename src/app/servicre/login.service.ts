import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUser } from '../interface/appUser';
import { User } from '../login/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiServerUrl = "http://localhost:8080/api/v1";

  constructor(private http: HttpClient){}

  public loginUser(user:User): Observable<AppUser> {
    return this.http.post<AppUser>(`${this.apiServerUrl}/registration/login`,user);
  }
}
