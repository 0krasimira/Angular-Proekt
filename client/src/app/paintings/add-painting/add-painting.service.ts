import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/app/environment/environment.development';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Painting } from 'src/app/types/painting';

@Injectable({
  providedIn: 'root'
})
export class AddPaintingService {

  constructor(private http: HttpClient) { }

  submitPainting(paintingData: Painting): Observable<Painting> {
    const { apiUrl } = environment;
    
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<Painting>(`${apiUrl}/add`, paintingData, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // if a client side or network error occurs. 
      console.error('An error occurred:', error.error.message);
    } else {
      // if the backend returned an unsuccessful response code.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  };
}
