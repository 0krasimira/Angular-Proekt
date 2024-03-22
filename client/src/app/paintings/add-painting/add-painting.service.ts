import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/app/environment/environment.development';
import { Painting } from 'src/app/types/painting';

@Injectable({
  providedIn: 'root'
})
export class AddPaintingService {

  constructor(private http: HttpClient) { }

  submitPainting(paintingData: Painting) {
    const { apiUrl } = environment;
    
    // Get the token from where it's stored in your Angular application
    const token = localStorage.getItem('token'); // Assuming you store the token in localStorage

    // Prepare the HTTP headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    // Make the HTTP request with the headers
    return this.http.post<Painting>(`${apiUrl}/add`, paintingData, { headers });
  }
}
