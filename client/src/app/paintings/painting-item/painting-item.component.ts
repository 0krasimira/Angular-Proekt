import { Component, Input } from '@angular/core';
import { Painting } from 'src/app/types/painting';

@Component({
  selector: 'app-painting-item',
  templateUrl: './painting-item.component.html',
  styleUrls: ['./painting-item.component.css']
})
export class PaintingItemComponent {
  @Input() painting: Painting | undefined; // Input property to receive painting data
}