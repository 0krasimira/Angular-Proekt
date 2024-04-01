import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

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
      map((user: any) => user ? user.email : '')
    );
    this.userId$ = this.authService.getUser().pipe(
      map((user: any) => user ? user._id : '')
    );
  }

  logout(): void {
    this.authService.logout().subscribe(
      () => {
        console.log('Logout successful');
        this.router.navigate(['/home']);
      },
      (error: any) => {
        console.error('Error logging out:', error);
      }
    );
  }
}
