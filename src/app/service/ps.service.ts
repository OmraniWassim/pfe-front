import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { manager } from '../components/forms-elements/manager';
import { ps } from '../components/forms-elements/ps';

@Injectable({
  providedIn: 'root'
})
export class PSService {

  private apiServerUrl = "http://localhost:8080/api/v1/ps";

  constructor(private http: HttpClient) { }

  public getPS(): Observable<ps[]> {
    return this.http.get<ps[]>(`${this.apiServerUrl}/all`);
  }

  public deleteps(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/delete/${id}`);
  }

  public getManager(): Observable<manager[]> {
    return this.http.get<manager[]>(`${this.apiServerUrl}/get/${name}`);
  }

  public addps(psM:ps): Observable<ps> {
    return this.http.post<ps>(`${this.apiServerUrl}/add`,psM);
  }

}
