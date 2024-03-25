import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Painting } from 'src/app/types/painting';
import { environment } from 'src/app/environment/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PaintingDetailsService implements OnDestroy {
  private unsubscribe$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getPaintingById(id: string): Observable<Painting> {
    return this.http.get<Painting>(`${environment.apiUrl}/paintings/${id}`)
      .pipe(
        takeUntil(this.unsubscribe$)
      );
  }

  editPainting(id: string, updatedPainting: Painting): Observable<Painting> {
    return this.http.put<Painting>(`${environment.apiUrl}/paintings/${id}`, updatedPainting)
      .pipe(
        takeUntil(this.unsubscribe$)
      );
  }

  deletePainting(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/paintings/${id}`)
      .pipe(
        takeUntil(this.unsubscribe$)
      );
  }
}
