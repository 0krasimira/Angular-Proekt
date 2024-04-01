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
        console.log('User ID:', userId); // Log the userId
        if (userId) {
          return this.authService.getUserById(userId).pipe(
            catchError(err => {
              console.error('Error fetching user:', err);
              return of(null);
            })
          );
        } else {
          console.error('User ID not provided.');
          return of(null);
        }
      })
    );

    this.userPaintings$ = this.user$.pipe(
      switchMap(user => {
        if (user) {
          return this.userProfileService.getUserPaintings(user._id).pipe(
            catchError(err => {
              console.error('Error fetching user paintings:', err);
              return of([]);
            })
          );
        } else {
          console.error('User not found.');
          return of([]);
        }
      })
    );
  }
}


