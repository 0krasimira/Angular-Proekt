import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserForAuth } from '../types/user';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user$: Observable<UserForAuth | null>; // Define user$ property

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    this.user$ = of(null); // Initialize user$ with null using of operator
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const userId = params['userId'];
      if (userId) {
        this.authService.getUserById(userId).subscribe(
          (user: UserForAuth | null) => { // Adjust the type of the user parameter
            if (user !== null) { // Check if the user is not null
              this.user$ = of(user); // Assign the fetched user to user$ using of operator
            } else {
              this.user$ = of(null); // Assign null to user$ in case of error using of operator
            }
          },
          (error) => {
            console.error('Error fetching user:', error);
            this.user$ = of(null); // Assign null to user$ in case of error using of operator
          }
        );
      }
    });
  }
}


