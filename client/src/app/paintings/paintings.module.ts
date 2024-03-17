import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintingsListComponent } from './paintings-list/paintings-list.component';
import { PaintingDetailsComponent } from './painting-details/painting-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PaintingsListComponent,
    PaintingDetailsComponent
  ],
  imports: [
    CommonModule, 
    RouterModule
  ],
  exports: [
    PaintingsListComponent,
    PaintingDetailsComponent
  ]
})
export class PaintingsModule { }