import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './core/footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { PaintingsModule } from './paintings/paintings.module';
// import { LoginComponent } from './login/login.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { AddPaintingComponent } from './paintings/add-painting/add-painting.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { TokenInterceptor } from './tokenInterceptor';
import { LogoutComponent } from './logout/logout.component';
import { EditPaintingComponent } from './paintings/edit-painting/edit-painting.component';



// import { RegisterComponent } from './register/register.component';

/*import the HttpClientModule from @angular/common/http,

import { HttpClientModule } from '@angular/common/http';*/


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    HomeComponent,
    NavigationComponent, 
    FooterComponent, 
    AddPaintingComponent, 
    RegisterComponent, 
    LoginComponent, 
    LogoutComponent, 
    EditPaintingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    ReactiveFormsModule,
    PaintingsModule,
  ],
  providers: [AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true, // This is important to allow multiple interceptors
  }] ,
  bootstrap: [AppComponent], 
  exports: [FooterComponent, ]
})
export class AppModule { }
