import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment/environment.development';
import { Painting } from 'src/app/types/painting';

@Injectable({
  providedIn: 'root'
})
export class EditPaintingService {

  constructor(private http: HttpClient) { }

  getPaintingById(paintingId: string, headers?: HttpHeaders): Observable<Painting> {
    const requestOptions = {
      headers: headers ? headers : new HttpHeaders()
    };

    const { apiUrl } = environment;
    const url = `${apiUrl}/paintings/${paintingId}/edit`; 

    return this.http.get<Painting>(url, requestOptions);
  }

  updatePainting(paintingId: string, updatedPaintingData: Painting): Observable<Painting> {
    const { apiUrl } = environment;
    const url = `${apiUrl}/paintings/${paintingId}/edit`; 
    return this.http.post<Painting>(url, updatedPaintingData);
  }
}
