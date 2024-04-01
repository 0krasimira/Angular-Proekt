import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/app/environment/environment.development';

@Component({
  selector: 'app-search-paintings',
  templateUrl: './search-paintings.component.html',
  styleUrls: ['./search-paintings.component.css']
})
export class SearchPaintingsComponent {
  minPrice: number = 0;
  maxPrice: number = 0;
  paintings: any[] = [];

  constructor(private http: HttpClient) {}

  onSubmit() {
    console.log('search button clicked');
    const { apiUrl } = environment;
    const requestUrl = `${apiUrl}/search?minPrice=${this.minPrice}&maxPrice=${this.maxPrice}`;
    console.log('Constructed API URL:', requestUrl);
    this.http.get<any[]>(requestUrl).subscribe(
      (data) => {
        console.log('Search request submitted');
        this.paintings = data;
      },
      (error) => {
        console.error('Error fetching search results:', error);
      }
    );
  }
}
