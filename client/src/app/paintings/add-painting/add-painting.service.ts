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
    
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<Painting>(`${apiUrl}/add`, paintingData, { headers });
  }
}
