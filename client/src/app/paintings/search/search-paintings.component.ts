import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/app/environment/environment.development';
import { Painting } from 'src/app/types/painting';

@Component({
  selector: 'app-search-paintings',
  templateUrl: './search-paintings.component.html',
  styleUrls: ['./search-paintings.component.css']
})
export class SearchPaintingsComponent {
  minPrice: number = 0;
  maxPrice: number = 0;
  paintings: Painting[] = [];

  constructor(private http: HttpClient) {}

  onSubmit() {
    console.log('search button clicked');
    const { apiUrl } = environment;
    const requestUrl = `${apiUrl}/search?minPrice=${this.minPrice}&maxPrice=${this.maxPrice}`;
    console.log('Constructed API URL:', requestUrl);
    this.http.get<Painting[]>(requestUrl).subscribe(
      (data) => { // response from the api
        console.log('Search request submitted');
        this.paintings = data; // Assigning the response data to the 'paintings' array to display found paintings
      },
      (error) => {
        console.error('Error fetching search results:', error);
      }
    );
  }
}
