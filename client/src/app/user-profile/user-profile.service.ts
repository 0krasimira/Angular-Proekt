import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private baseUrl = 'http://localhost:3000/auth'; // Backend base URL

  constructor(private http: HttpClient) { }

  getUserById(userId: string): Observable<User> {
    const url = `${this.baseUrl}/${userId}`; // Construct the complete URL
    return this.http.get<User>(url);
  }
}


