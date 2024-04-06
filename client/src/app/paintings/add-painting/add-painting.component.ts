import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddPaintingService } from './add-painting.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-add-painting',
  templateUrl: './add-painting.component.html',
  styleUrls: ['./add-painting.component.css']
})
export class AddPaintingComponent implements OnInit {
  paintingForm: FormGroup;
  authorEmail: string = '';
  errorMessage: string = '';
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private addPaintingService: AddPaintingService, 
    private router: Router,
    private authService: AuthService 
  ) {
    this.paintingForm = this.fb.group({
      title: ['', Validators.required],
      year: ['', Validators.required],
      technique: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', [Validators.required, Validators.pattern(/^https?:\/\//)]],
      price: ['', [Validators.required, Validators.min(0)]],
      author: [{ value: this.authorEmail, disabled: true }, Validators.required] // Disable and set authorEmail
    });
  }

  ngOnInit(): void {
    this.authService.user$.subscribe({
      next: (user) => {
        console.log('User from AuthService:', user);
        if (user) {
          console.log('User:', user);
          // Update the author field value directly
          this.paintingForm.get('author')?.setValue(user.email);
        }
      },
      error: (error) => {
        console.error('Error fetching user:', error);
      }
    });
  }
  
  onSubmit() {
    this.submitted = true; // Set submitted to true on form submission

    if (this.paintingForm.invalid) {
      // If the form is invalid, mark all fields as touched to display errors
      this.paintingForm.markAllAsTouched();
      return;
    }

    this.addPaintingService.submitPainting(this.paintingForm.value).subscribe(
      (response) => {
        console.log(response);
        console.log('Painting submitted successfully!');
        this.router.navigate(['/paintings']);
      },
      (error) => {
        //in case of network or server error
        console.error('Error submitting painting:', error);
        if (error.error && error.error.message) {
          this.errorMessage = error.error.message; // validation errors with specific message indicating the failure
        } else {
          this.errorMessage = 'An error occurred while submitting the form.'; //validation errors
        }
      }
    );
  }
}
