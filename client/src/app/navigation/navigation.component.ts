import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators'; // Import the map operator

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isLoggedIn$!: Observable<boolean>;
  userEmail$!: Observable<string>;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
    this.userEmail$ = this.authService.getUser().pipe(
      map((user: any) => user ? user.email : '') // Explicitly specify the type of 'user'
    );
  }

  logout(): void {
    this.authService.logout().subscribe(
      () => {
        console.log('Logout successful');
        // Handle any additional logout logic
        // Redirect to home page
        this.router.navigate(['/home']);
      },
      (error: any) => {
        console.error('Error logging out:', error);
        // Handle error if needed
      }
    );
  }
}


