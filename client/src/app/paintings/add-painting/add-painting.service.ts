import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environment/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AddPaintingService {

  constructor(private http: HttpClient) { }

  submitPainting(paintingData: any) {
    const {apiUrl} = environment
    return this.http.post(`${apiUrl}/add`, paintingData);
  }
}
