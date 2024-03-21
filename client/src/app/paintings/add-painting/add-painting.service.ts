import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environment/environment.development';
import { Painting } from 'src/app/types/painting';

@Injectable({
  providedIn: 'root'
})
export class AddPaintingService {

  constructor(private http: HttpClient) { }

  submitPainting(paintingData: any) {
    const {apiUrl} = environment
    return this.http.post<Painting>(`${apiUrl}/add`, paintingData);
  }
}