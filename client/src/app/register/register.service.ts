import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { environment } from '../environment/environment.development';
import { User } from '../types/user';
import { AuthService } from '../auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  

  constructor(private http: HttpClient, private authService: AuthService) {}

  registerUser(userData: any): Observable<any> {
    const { apiUrl } = environment;
    return this.http.post<User>(`${apiUrl}/auth/register`, userData).pipe(
      tap(() => {
        this.authService.updateAuthStatus(true);
      })
    );
  }
}
