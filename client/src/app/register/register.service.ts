import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { environment } from '../environment/environment.development';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  

  constructor(private http: HttpClient) {}

  registerUser(userData: any): Observable<any> {
    const {apiUrl} = environment
    return this.http.post<User>(`${apiUrl}/auth/register`, userData);
  }
}
