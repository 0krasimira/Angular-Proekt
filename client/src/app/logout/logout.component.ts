import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from './logout.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
  providers: [LogoutService]
})
export class LogoutComponent implements OnInit {

  constructor(
    private logoutService: LogoutService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.logout();
  }

  logout(): void {
    this.logoutService.logout().subscribe(
      () => {
        // Successful logout, navigate to home or any other desired page
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Error logging out:', error);
        // Handle error if necessary
      }
    );
  }

}

