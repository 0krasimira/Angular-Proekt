import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaintingsListComponent } from './paintings-list/paintings-list.component';
import { PaintingDetailsComponent } from './painting-details/painting-details.component';
import { AddPaintingComponent } from './add-painting/add-painting.component';

import { CanActivateFn } from '@angular/router';
import { AuthGuardService } from '../authGuardService';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { SearchPaintingsComponent } from './search/search-paintings.component';

const routes: Routes = [

  { path: 'paintings', component: PaintingsListComponent },
  { path: 'paintings/:paintingId', component: PaintingDetailsComponent },
  { path: 'add', component: AddPaintingComponent, canActivate: [AuthGuardService]},
  {path: 'search', component: SearchPaintingsComponent},
  // {path: 'users/:userId', component: UserProfileComponent},
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
  
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaintingsRoutingModule { }