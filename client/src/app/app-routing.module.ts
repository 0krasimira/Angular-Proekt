import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PaintingsListComponent } from './paintings/paintings-list/paintings-list.component';
import { PaintingsRoutingModule } from './paintings/paintings-routing.module';
import { PaintingDetailsComponent } from './paintings/painting-details/painting-details.component';
import { AddPaintingComponent } from './paintings/add-painting/add-painting.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './authGuardService';
import { EditPaintingComponent } from './paintings/edit-painting/edit-painting.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchPaintingsComponent } from './paintings/search/search-paintings.component';




// import { BooksComponent } from '../';
// import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'paintings', component: PaintingsListComponent},
  { path: 'paintings/:paintingId', component: PaintingDetailsComponent }, 
  { path: 'paintings/:paintingId/edit', component: EditPaintingComponent }, 
  { path: 'add', component: AddPaintingComponent, canActivate: [AuthGuardService] },
  {path: 'auth/register', component: RegisterComponent},
  {path: 'auth/login', component: LoginComponent},
  {path: 'auth/logout', component: LogoutComponent},
  { path: 'users/:userId', component: UserProfileComponent },
  {path: 'search', component: SearchPaintingsComponent},
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }