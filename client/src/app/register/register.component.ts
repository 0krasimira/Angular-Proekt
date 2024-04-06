import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup; // Initialize registerForm
  errorMessage: string = ''; // Initialize errorMessage

  constructor(private formBuilder: FormBuilder, private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      // Check if passwords match
      const password = this.registerForm.get('password')!.value;
      const repeatPassword = this.registerForm.get('repeatPassword')!.value;
      if (password !== repeatPassword) {
        this.errorMessage = 'Passwords do not match';
        return;
      }
  
      // Register user
      this.registerService.registerUser(this.registerForm.value).subscribe(
        (response) => {
          console.log(response);
          console.log('user registered successfully!', response.valueOf);
          this.errorMessage = ''; // Reset errorMessage on successful registration
          this.router.navigate(['auth/login']);
        },
        (error) => {
          console.error('Error submitting user:', error);
          this.errorMessage = 'Registration unsuccessful, please try again.';
        }
      );
    }
  }
  
}
