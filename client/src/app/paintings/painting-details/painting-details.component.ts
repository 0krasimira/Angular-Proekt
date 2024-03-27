import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Painting } from 'src/app/types/painting';
import { PaintingDetailsService } from './painting-details.service';
import { AuthService } from 'src/app/auth.service'; // Import AuthService
import { UserForAuth } from 'src/app/types/user';

@Component({
  selector: 'app-painting-details',
  templateUrl: './painting-details.component.html',
  styleUrls: ['./painting-details.component.css']
})
export class PaintingDetailsComponent implements OnInit {

  painting: Painting | undefined;
  paintingId: string | undefined;
  currentUser!: UserForAuth | null; // Define currentUser property

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private paintingDetailsService: PaintingDetailsService,
    private authService: AuthService, // Inject AuthService
  ) {}

  ngOnInit(): void {
    // Subscribe to changes in the current user
    this.authService.user$.subscribe(user => {
      this.currentUser = user;
    });

    this.route.paramMap.subscribe(params => {
      const paintingIdParam = params.get('paintingId');
      if (paintingIdParam !== null) {
        this.paintingId = paintingIdParam;
        this.paintingDetailsService.getPaintingById(this.paintingId).subscribe((painting) => {
          this.painting = painting;
          console.log(this.painting);
        });
      } else {
        console.error('paintingId parameter is missing');
      }
    });
  }

  editPainting() {
    // Check if the current user is authorized to edit the painting
    if (this.currentUser && this.painting && this.currentUser.email === this.painting.author.email) {
      this.router.navigate(['/paintings', this.paintingId, 'edit']);
    } else {
      console.error('You are not authorized to edit this painting.');
      // Handle unauthorized access
    }
  }

  deletePainting() {
    if (this.currentUser && this.painting && this.currentUser.email === this.painting.author.email) {
      if (this.paintingId) {
        this.paintingDetailsService.deletePainting(this.paintingId).subscribe(() => {
          this.router.navigate(['/paintings']);
        });
      }
    } else {
      console.error('You are not authorized to delete this painting.');
      // Handle unauthorized access
    }
  }
}

