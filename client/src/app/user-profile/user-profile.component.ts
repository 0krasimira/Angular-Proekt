import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserForAuth } from '../types/user';
import { Observable, of } from 'rxjs';
import { Painting } from '../types/painting'; // Import the Painting type
import { switchMap } from 'rxjs/operators'; // Import switchMap operator

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user$: Observable<UserForAuth | null> = of(null); // Initialize user$ property
  userPaintings$: Observable<Painting[]> = of([]); // Initialize userPaintings$ property

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.user$ = this.route.params.pipe(
      switchMap(params => {
        const userId = params['userId'];
        if (userId) {
          return this.authService.getUserById(userId);
        } else {
          console.error('User ID not provided.');
          return of(null);
        }
      })
    );
  
    this.userPaintings$ = this.user$.pipe(
      switchMap(user => {
        if (user) {
          return this.authService.getPaintingsByUser(user._id);
        } else {
          console.error('User not found.');
          return of([]);
        }
      })
    );
  
    // Subscribe to userPaintings$ and log the paintings
    this.userPaintings$.subscribe(paintings => {
      console.log('User paintings:', paintings);
    });
  }
}  