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

  constructor(
    private fb: FormBuilder,
    private addPaintingService: AddPaintingService, 
    private router: Router,
    private authService: AuthService // Inject the AuthService
  ) {
    this.paintingForm = this.fb.group({
      title: ['', Validators.required],
      year: ['', Validators.required],
      technique: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required],
      price: ['', Validators.required],
      author: ['', Validators.required] // Assuming author is required
    });
  }

  ngOnInit(): void {
    // Fetch the user's email from AuthService and set it as the author
    this.authService.getUserEmail().subscribe(email => {
      console.log(email)
      if (email) {
        this.paintingForm.patchValue({ author: email });
      }
    });
  }

  onSubmit() {
    if (this.paintingForm.valid) {
      console.log(this.paintingForm.value);
      this.addPaintingService.submitPainting(this.paintingForm.value).subscribe(
        (response) => {
          console.log(response);
          console.log('Painting submitted successfully!', response.valueOf);
          this.router.navigate(['/paintings']);
        },
        (error) => {
          console.error('Error submitting painting:', error);
        }
      );
    }
  }
}

//router.post na add