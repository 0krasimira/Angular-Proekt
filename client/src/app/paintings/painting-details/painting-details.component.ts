import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Painting } from 'src/app/types/painting';
import { PaintingDetailsService } from './painting-details.service';

@Component({
  selector: 'app-painting-details',
  templateUrl: './painting-details.component.html',
  styleUrls: ['./painting-details.component.css']
})
export class PaintingDetailsComponent implements OnInit {

  painting: Painting | undefined;
  paintingId: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private paintingDetailsService: PaintingDetailsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const paintingIdParam = params.get('paintingId');
      if (paintingIdParam !== null) {
        this.paintingId = paintingIdParam;
        this.paintingDetailsService.getPaintingById(this.paintingId).subscribe((painting) => {
          this.painting = painting;
          console.log(this.painting);
        });
      } else {
        console.error('paintingId parameter is missing');
      }
    });
  }

  editPainting() {
    if (this.paintingId) {
      this.router.navigate(['/paintings', this.paintingId, 'edit']);
    }
  }

  deletePainting() {
    if (this.paintingId) {
      this.paintingDetailsService.deletePainting(this.paintingId).subscribe(() => {
        this.router.navigate(['/paintings']);
      });
    }
  }

}