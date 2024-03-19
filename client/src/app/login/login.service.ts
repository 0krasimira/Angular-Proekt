import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../types/user';
import { environment } from '../environment/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const {apiUrl} = environment
    return this.http.post<User>(`${apiUrl}/auth/login`, { email, password });
  }
}
