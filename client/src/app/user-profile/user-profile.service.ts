import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Painting } from '../types/painting';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private baseUrl = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) { }

  getUserPaintings(userId: string): Observable<Painting[]> {
    const url = `${this.baseUrl}/${userId}/paintings`;
    return this.http.get<Painting[]>(url).pipe(
      catchError(error => {
        if (error.status === 404) {
          // User not found, return empty array
          return of([]);
        } else {
          // Handle other errors
          throw error;
        }
      })
    );
  }
}


// http://localhost:3000/auth/:userId/paintings