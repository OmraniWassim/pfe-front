import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { AppUser } from '../interface/appUser';


@Injectable({providedIn: 'root'})

export class AppUserService {

  private apiServerUrl = "http://localhost:8080/api/v1";

  constructor(private http: HttpClient){}

  public getAppUsers(): Observable<AppUser[]> {
    return this.http.get<AppUser[]>(`${this.apiServerUrl}/registration/all`);
  }

  public addAppUser(appUser:AppUser): Observable<AppUser> {
    return this.http.post<AppUser>(`${this.apiServerUrl}/registration/add`,appUser);
  }


  public updateAppUser(id:number,appUser:AppUser): Observable<void> {
    return this.http.put<void>(`${this.apiServerUrl}/registration/add/${id}`,appUser);
  }
  public deleteAppUser(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/registration/delete/${id}`);
  }











}
