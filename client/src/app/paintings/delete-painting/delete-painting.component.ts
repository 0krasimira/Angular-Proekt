// delete-painting.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeletePaintingService } from './delete-painting.service';

@Component({
  selector: 'app-delete-painting',
  templateUrl: './delete-painting.component.html',
  styleUrls: ['./delete-painting.component.css']
})
export class DeletePaintingComponent implements OnInit {

  paintingId!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private deletePaintingService: DeletePaintingService
  ) { }

  ngOnInit(): void {
    this.paintingId = this.route.snapshot.params['paintingId'];
  }

  confirmDelete(): void {
    const confirmDelete = confirm("Are you sure you want to delete this painting?");
    if (confirmDelete) {
      this.deletePaintingService.deletePainting(this.paintingId).subscribe(
        () => {
          console.log('Painting deleted successfully');
          // Redirect to paintings list or any other desired route
          this.router.navigate(['/paintings']);
        },
        (error) => {
          console.error('Error deleting painting:', error);
          // Handle error if needed
        }
      );
    }
  }
}



