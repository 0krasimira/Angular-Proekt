import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditPaintingService } from './edit-painting.service';
import { Painting } from 'src/app/types/painting';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/auth.service'; // Import the AuthService

@Component({
  selector: 'app-edit-painting',
  templateUrl: './edit-painting.component.html',
  styleUrls: ['./edit-painting.component.css']
})
export class EditPaintingComponent implements OnInit {

  editPaintingForm!: FormGroup;
  painting: Painting | undefined;
  authorEmail: string = '';
  currentUserEmail: string | null = null; // Variable to store the current user's email

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private editPaintingService: EditPaintingService,
    private route: ActivatedRoute,
    private authService: AuthService // Inject the AuthService
  ) {}

  ngOnInit(): void {
    console.log('editpaintingcomponent initialized');
    this.editPaintingForm = this.formBuilder.group({
      title: ['', Validators.required],
      year: ['', Validators.required],
      technique: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      author: ['', Validators.required]
    });

    const paintingId = this.route.snapshot.params['paintingId'] || '';

    // Subscribe to the user$ observable to get the current user's email
    this.authService.user$.subscribe(user => {
      if (user) {
        this.currentUserEmail = user.email;
      }
    });

    const authToken = localStorage.getItem('token');

    if (!authToken) {
      console.error('Authorization token not found.');
      // Handle the case where token is not found (redirect to login?)
      return;
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });

    this.editPaintingService.getPaintingById(paintingId, headers).subscribe(
      (painting: Painting) => {
        console.log('Fetched painting:', painting);
        this.painting = painting;
        this.patchFormWithPaintingData();
        this.authorEmail = painting.author.email;
      },
      (error) => {
        console.error('Error fetching painting:', error);
        // Handle error if needed
      }
    );
  }

  private patchFormWithPaintingData(): void {
    if (this.painting) {
      this.editPaintingForm.patchValue({
        title: this.painting.title,
        year: this.painting.year,
        technique: this.painting.technique,
        description: this.painting.description,
        imageUrl: this.painting.imageUrl,
        price: this.painting.price,
        author: this.painting.author.email
      });
    }
  }

  onSubmit(): void {
    if (this.editPaintingForm.valid && this.painting && this.currentUserEmail === this.painting.author.email) {
      const updatedPaintingData = this.editPaintingForm.value;
      this.editPaintingService.updatePainting(this.painting._id, updatedPaintingData).subscribe(
        (updatedPainting: Painting) => {
          console.log('Painting updated:', updatedPainting);
          this.router.navigate(['/paintings', updatedPainting._id]);
        },
        (error) => {
          console.error('Error updating painting:', error);
        }
      );
    } else {
      console.error('You are not authorized to edit this painting.');
      // Handle unauthorized access
    }
  }
}
