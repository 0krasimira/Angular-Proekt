import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PaintingsListComponent } from './paintings/paintings-list/paintings-list.component';
import { PaintingsRoutingModule } from './paintings/paintings-routing.module';
import { PaintingDetailsComponent } from './paintings/painting-details/painting-details.component';
import { AddPaintingComponent } from './paintings/add-painting/add-painting.component';


// import { BooksComponent } from '../';
// import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'paintings', component: PaintingsListComponent},
  { path: 'paintings/:paintingId', component: PaintingDetailsComponent }, 
  {path: 'add', component: AddPaintingComponent}
 
  // { path: 'user/:id', component: UserDetailsComponent }
  // {path: 'user/:id/:username', component: UserProfileComponent}
  //{ path: '**', component: PageNotFoundComponent } - add page not found component
  // TODO: add all routes
  /*Create nested routing by defining child routes using the
children property of a route
▪ New router outlet needed at UsersComponent
Setting Up Child (Nested) Routes
{
 path: 'users', component: UsersComponent, children: [
 { path: ':id', component: UserComponent },
 { path: ':id/details', component: UserDetailsComponent }
 ]
}
<router-outlet></router-outlet>*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }