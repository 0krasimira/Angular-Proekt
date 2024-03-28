import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { UserForAuth } from 'src/app/types/user';
import { Painting } from 'src/app/types/painting';
import { PaintingDetailsService } from './painting-details.service';

@Component({
  selector: 'app-painting-details',
  templateUrl: './painting-details.component.html',
  styleUrls: ['./painting-details.component.css']
})
export class PaintingDetailsComponent implements OnInit {
  @Input() artistId: string = ''; // Input property to receive artistId
  painting: Painting | undefined; // Holds the painting details
  paintingId: string | undefined; // Holds the ID of the painting
  currentUser: UserForAuth | null = null; // Holds the current user details
  isLoggedIn$: Observable<boolean>; // Observable to check if the user is logged in

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private paintingDetailsService: PaintingDetailsService,
    private authService: AuthService
  ) {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
  }

  // Navigates to the artist's profile page
  goToArtistProfile(artistId: string) {
    this.router.navigate(['/users', artistId]);
  }

  ngOnInit(): void {
    // Subscribe to changes in the current user
    this.authService.getUser().subscribe(user => {
      this.currentUser = user;
    });
  
    // Retrieve painting details based on the route parameter
    this.route.paramMap.subscribe(params => {
      const paintingIdParam = params.get('paintingId');
      if (paintingIdParam !== null) {
        this.paintingId = paintingIdParam;
        // Fetch painting details from the service
        this.paintingDetailsService.getPaintingById(this.paintingId).subscribe((painting) => {
          this.painting = painting;
          console.log(this.painting); // Log the fetched painting
        }, error => {
          console.error('Error fetching painting details:', error);
          // Handle error - navigate to "Not Found" page or display an error message
          this.router.navigate(['/not-found']); // Navigate to "Not Found" page
        });
      } else {
        console.error('paintingId parameter is missing');
        // Handle missing paintingId parameter - navigate to "Not Found" page or display an error message
        this.router.navigate(['/not-found']); // Navigate to "Not Found" page
      }
    });
  }
  

  // Redirects to the edit page if authorized
  editPainting() {
    // Check if the current user is authorized to edit the painting
    if (this.currentUser && this.painting && this.currentUser.email === this.painting.author.email) {
      this.router.navigate(['/paintings', this.paintingId, 'edit']); // Navigate to edit page
    } else {
      console.error('You are not authorized to edit this painting.');
      // Handle unauthorized access
    }
  }

  // Asks for confirmation before deleting the painting
  confirmDelete() {
    const confirmDelete = confirm("Are you sure you want to delete this painting?");
    if (confirmDelete) {
      this.deletePainting(); // Call deletePainting method if confirmed
    }
  }

  // Deletes the painting if authorized
  deletePainting() {
    if (this.currentUser && this.painting && this.currentUser.email === this.painting.author.email) {
      if (this.paintingId) {
        this.paintingDetailsService.deletePainting(this.paintingId).subscribe(() => {
          this.router.navigate(['/paintings']); // Navigate back to paintings list after deletion
        });
      }
    } else {
      console.error('You are not authorized to delete this painting.');
      // Handle unauthorized access
    }
  }

  // Function to check if the current user is authorized to edit or delete the painting
  isUserAuthorized(): boolean {
    return !!this.currentUser && !!this.painting && this.currentUser.email === this.painting.author.email;
  }
}
