import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';



export const routes: Routes = [
  { path: 'auth/register', component: RegisterComponent}
 
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
export class RegisterRoutingModule { }