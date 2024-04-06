import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { UserForAuth } from '../types/user';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isLoggedIn$!: Observable<boolean>;
  userEmail$!: Observable<string>;
  userId$!: Observable<string>;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
    this.userEmail$ = this.authService.getUser().pipe(
      map((user: UserForAuth | null) => user ? user.email : '') // check if userforAuth is null - in case he is not logged in
    );
    this.userId$ = this.authService.getUser().pipe(
      map((user: UserForAuth | null) => user ? user._id : '') // check if userforAuth is null - in case he is not logged in
    );
  }

  logout(): void {
    this.authService.logout().subscribe(
      () => {
        console.log('Logout successful');
        this.isLoggedIn$ = this.authService.isLoggedIn$; // Update isLoggedIn$ after logout
        this.router.navigate(['/home']);
      },
      (error: any) => {
        console.error('Error logging out:', error);
      }
    );
  }
}
