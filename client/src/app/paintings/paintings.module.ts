import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintingsListComponent } from './paintings-list/paintings-list.component';
import { PaintingDetailsComponent } from './painting-details/painting-details.component';
import { RouterModule } from '@angular/router';
import { AddPaintingComponent } from './add-painting/add-painting.component';
import { AuthService } from '../auth.service';



@NgModule({
  declarations: [
    PaintingsListComponent,
    PaintingDetailsComponent,
    
    
    
  ],
  imports: [
    CommonModule, 
    RouterModule
  ],
  exports: [
    PaintingsListComponent,
    PaintingDetailsComponent,
    
  ],

  providers: [AuthService]
})
export class PaintingsModule { }