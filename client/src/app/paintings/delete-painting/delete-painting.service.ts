import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DeletePaintingService {

  constructor(private http: HttpClient) { }

  deletePainting(paintingId: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/paintings/${paintingId}/delete`);
  }
}

