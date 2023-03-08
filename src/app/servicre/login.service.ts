import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUserDTO } from '../interface/app-user-dto';
import { User } from '../login/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiServerUrl = "http://localhost:8080/api/v1";

  constructor(private http: HttpClient){}

  public loginUser(user:User): Observable<AppUserDTO> {
    return this.http.post<AppUserDTO>(`${this.apiServerUrl}/registration/login`,user);
  }


}

