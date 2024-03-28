import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Painting } from '../types/painting'; // Import the Painting type

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private baseUrl = 'http://localhost:3000/auth'; // Backend base URL

  constructor(private http: HttpClient) { }

  getUserPaintings(userId: string): Observable<Painting[]> {
    const url = `${this.baseUrl}/${userId}/paintings`; // Construct the complete URL
    return this.http.get<Painting[]>(url);
  }
}


// http://localhost:3000/auth/:userId/paintings