import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './environment/environment.development';
import { Painting } from './types/painting';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPaintings(){
    const {apiUrl} = environment
    return this.http.get<Painting[]>(`${apiUrl}/paintings`)
  }

  getPaintingById(id: string) {
    const {apiUrl} = environment
    return this.http.get<Painting[]>(`${apiUrl}/paintings/${id}`)
  }

}