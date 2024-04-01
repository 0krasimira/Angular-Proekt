import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserForAuth } from '../types/user';
import { Observable, of } from 'rxjs';
import { UserProfileService } from './user-profile.service';
import { Painting } from '../types/painting';
import { switchMap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user$: Observable<UserForAuth | null> = of(null);
  userPaintings$: Observable<Painting[]> = of([]);

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private userProfileService: UserProfileService
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
      }),
      catchError(() => of(null)) // Handle error if getUserById fails
    );
  
    this.userPaintings$ = this.user$.pipe(
      switchMap(user => {
        if (user) {
          return this.userProfileService.getUserPaintings(user._id);
        } else {
          console.error('User not found.');
          return of([]);
        }
      }),
      catchError(() => of([])) // Handle error if getUserPaintings fails
    );
  
    // Subscribe to userPaintings$ and log the paintings
    this.userPaintings$.subscribe(paintings => {
      console.log('User paintings:', paintings);
    });
  }
}

