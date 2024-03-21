import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();
  constructor(private formBuilder: FormBuilder,  private AuthService: AuthService, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Convenience getter for easy access to form fields
  get formControls() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    console.log('Login successful!', this.loginForm.value);
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
      (response) => {
        console.log(response);
        console.log('User logged in successfully!', response.valueOf());
        const token = localStorage.setItem(response?.token, "auth")
        //set user email
        const email = this.AuthService.setUserEmail(this.loginForm.value.email);
        this.AuthService.userEmail$.subscribe(email => {
          console.log(email); // Log the user's email
        });
        // Call updateAuthStatus with isLoggedIn set to true
        this.AuthService.updateAuthStatus(true);
        // Redirect to home after successful login
        this.router.navigate(['add']);
      },
      (error) => {
        console.error('Error submitting user:', error);
      }
    );
  }
}
