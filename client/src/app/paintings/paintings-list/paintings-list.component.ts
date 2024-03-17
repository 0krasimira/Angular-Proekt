import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Painting } from '../../types/painting';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paintings-list',
  templateUrl: './paintings-list.component.html',
  styleUrls: ['./paintings-list.component.css']
})
export class PaintingsListComponent implements OnInit, OnDestroy {
  paintings: Painting[] = [];
  private paintingsSubscription: Subscription | undefined;

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.paintingsSubscription = this.api.getPaintings().subscribe((paintings) => {
      console.log(paintings);
      console.log(typeof paintings);
      this.paintings = paintings;
    });
  }

  showPaintingDetails(paintingId: string): void {
    this.paintingsSubscription = this.api.getPaintingById(paintingId).subscribe((paintingId) => {
     console.log(paintingId)
    })
    this.router.navigate(['/paintings', paintingId]);
  }

  ngOnDestroy(): void {
    // Unsubscribe from the observable to prevent memory leaks
    if (this.paintingsSubscription) {
      this.paintingsSubscription.unsubscribe();
    }
  }
}
