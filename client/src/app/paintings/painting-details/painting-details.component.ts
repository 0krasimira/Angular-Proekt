import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Painting } from 'src/app/types/painting';
import { PaintingDetailsService } from './painting-details.service';

@Component({
  selector: 'app-painting-details',
  templateUrl: './painting-details.component.html',
  styleUrls: ['./painting-details.component.css']
})
export class PaintingDetailsComponent implements OnInit {

  painting: Painting | undefined; 
  paintingId: string | undefined; 
  
  

  constructor(
    private route: ActivatedRoute,
    private paintingDetailsService: PaintingDetailsService
  ) { }


// Update the code in your PaintingDetailsComponent to use 'paintingId' instead of 'id'
ngOnInit(): void {
  // Get the 'paintingId' parameter from the route as a string
  this.route.paramMap.subscribe(params => {
    const paintingIdParam = params.get('paintingId');
    if (paintingIdParam !== null) {
      this.paintingId = paintingIdParam;
      // Fetch painting details using the service
      this.paintingDetailsService.getPaintingById(this.paintingId).subscribe((painting) => {
        // Assign the fetched painting details to this.painting
        this.painting = painting;
        // Now you can safely access this.painting here
        console.log(this.painting);
      });
    } else {
      // Handle case where paintingId is not present in the route
      console.error('paintingId parameter is missing');
    }
  });

}

}
