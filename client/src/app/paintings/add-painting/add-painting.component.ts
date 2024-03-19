import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddPaintingService } from './add-painting.service';
import { Router } from '@angular/router';

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
    private router: Router
  ) {
    this.paintingForm = this.fb.group({
      title: ['', Validators.required],
      year: ['', Validators.required],
      technique: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required],
      price: ['', Validators.required],
      author: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // You can also create the form here if you prefer.
  }

  onSubmit() {
    if (this.paintingForm.valid) {
      console.log(this.paintingForm.value)
      this.addPaintingService.submitPainting(this.paintingForm.value).subscribe(
  
        (response) => {
          console.log(response)
          console.log('Painting submitted successfully!', response.valueOf);
          this.router.navigate(['/paintings'])
        },
        (error) => {
          console.error('Error submitting painting:', error);
          // Handle error, display error message, etc.
        }
      );
    }
  }
}
