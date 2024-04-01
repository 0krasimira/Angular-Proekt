import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintingsListComponent } from './paintings-list/paintings-list.component';
import { PaintingDetailsComponent } from './painting-details/painting-details.component';
import { RouterModule } from '@angular/router';
import { AddPaintingComponent } from './add-painting/add-painting.component';
import { AuthService } from '../auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { DeletePaintingComponent } from './delete-painting/delete-painting.component';
import { PaintingItemComponent } from './painting-item/painting-item.component';




@NgModule({
  declarations: [
    PaintingsListComponent,
    PaintingDetailsComponent,
    DeletePaintingComponent,
    PaintingItemComponent,
    
  ],
  imports: [
    CommonModule, 
    RouterModule, 
    ReactiveFormsModule
  ],
  exports: [
    PaintingsListComponent,
    PaintingDetailsComponent,
    PaintingItemComponent
  ],

  providers: [AuthService]
})
export class PaintingsModule { }