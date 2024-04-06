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

  @Input() artistId: string = '';
  painting: Painting | undefined;
  paintingId: string | undefined;
  currentUser: UserForAuth | null = null;
  isLoggedIn$: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private paintingDetailsService: PaintingDetailsService,
    private authService: AuthService,
  ) {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
  }

  goToArtistProfile(artistId: string) {
    this.router.navigate(['/users', artistId]);
  }

  ngOnInit(): void {
    this.authService.getUser().subscribe(user => {
      this.currentUser = user;
    });
  
    this.route.paramMap.subscribe(params => {
      const paintingIdParam = params.get('paintingId');
      if (paintingIdParam !== null) {
        this.paintingId = paintingIdParam;
        this.paintingDetailsService.getPaintingById(this.paintingId).subscribe((painting) => {
          this.painting = painting;
          console.log(this.painting);
        }, error => {
          console.error('Error fetching painting details:', error);
          this.router.navigate(['/not-found']);
        });
      } else {
        console.error('paintingId parameter is missing');
        this.router.navigate(['/not-found']);
      }
    });
  }

  editPainting() {
    if (this.currentUser && this.painting && this.currentUser.email === this.painting.author.email) {
      this.router.navigate(['/paintings', this.paintingId, 'edit']);
    } else {
      console.error('You are not authorized to edit this painting.');
    }
  }

  confirmDelete() {
    const confirmDelete = confirm("Are you sure you want to delete this painting?");
    if (confirmDelete) {
      this.deletePainting();
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
    }
  }

  likePainting(paintingId: string): void {
    if (!this.currentUser) {
      console.error('Please log in to like the painting.');
      return;
    }
    if (!this.painting || !this.painting.likes) {
      console.error('Invalid painting data.');
      return;
    }
    if (this.painting.likes.includes(this.currentUser._id)) {
      console.error('You have already liked this painting.');
      return;
    }
    this.paintingDetailsService.likePainting(paintingId).subscribe(
      () => {
        this.paintingDetailsService.getPaintingById(paintingId).subscribe(
          (updatedPainting) => {
            this.painting = updatedPainting;
          },
          (error) => {
            console.error('Error fetching updated painting details:', error);
          }
        );
      },
      (error) => {
        console.error('Error liking painting:', error);
      }
    );
  }
  
  isUserAuthorized(): boolean {
    return !!this.currentUser && !!this.painting && !!this.painting.author &&
      this.currentUser.email === this.painting.author.email;
  }
}