import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { environment } from '../environment/environment.development';
import { UserForAuth } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  login(email: string, password: string): Observable<UserForAuth> { // Change the return type to Observable<UserForAuth>
    const { apiUrl } = environment;
    return this.http.post<UserForAuth>(`${apiUrl}/auth/login`, { email, password }).pipe( // Update the return type and expected response type
      tap(response => {
        if (response && response.token) {
          // Update the authentication status
          this.authService.updateAuthStatus(true);
          // Set the user in the AuthService
          this.authService.setUser(response); // Assuming the entire response object contains user details
        } else {
          // Handle the case when either token or user is missing
          throw new Error('Invalid login response');
        }
      })
    );
  }
}

