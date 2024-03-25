// logout.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  constructor(private http: HttpClient) {}

  logout(): Observable<any> {
    const {apiUrl} = environment
    return this.http.get<any>(`${apiUrl}/auth/logout`); 
  }
}
