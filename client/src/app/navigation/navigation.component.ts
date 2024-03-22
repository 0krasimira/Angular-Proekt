import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(private authService: AuthService) {
    // Initialize isLoggedIn$ in the constructor
    this.isLoggedIn$ = this.authService.isLoggedIn$;
  }

  ngOnInit(): void {
  }
}

