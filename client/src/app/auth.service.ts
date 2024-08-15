import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { UserForAuth } from './types/user';
import { environment } from './environment/environment.development';
import { HttpClient } from '@angular/common/http';
import { Painting } from './types/painting';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false); // tracks if user is logged in
  private userEmailSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null); // stores and observes user's email
  private userIdSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null); // stores and observes user's id
  private userSubject: BehaviorSubject<UserForAuth | null> = new BehaviorSubject<UserForAuth | null>(null); // stores and observes user's authentication details
  userEmail$: Observable<string | null> = this.userEmailSubject.asObservable(); // subscribes to changes in user's email - to display the hello message in the nav
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable(); // subscribes to changes in the auth status
  userId$: Observable<string | null> = this.userIdSubject.asObservable(); // subscribes to changes in userid
  user$: Observable<UserForAuth | null> = this.userSubject.asObservable(); // subscribes to changes in user's auth details


  constructor(private httpClient: HttpClient) { }

  setUser(user: UserForAuth): void { 
    console.log(`setting user: ${user.email}`);
    this.userSubject.next(user);
  }

  getUser(): Observable<UserForAuth | null> { 
    console.log('getting user:', this.userSubject.getValue()?.email);
    return this.userSubject.asObservable();
  }

  updateAuthStatus(isLoggedIn: boolean): void {
    console.log('Updating auth status:', isLoggedIn);
    this.isLoggedInSubject.next(isLoggedIn);
  }

  getAuthStatus(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  setUserEmail(email: string | null): void {
    console.log('Setting user email:', email);
    localStorage.setItem('userEmail', email || '');
    this.userEmailSubject.next(email);
  }

  getUserEmail(): Observable<string | null> {
    console.log('Getting user email:', this.userEmailSubject.getValue());
    return this.userEmail$;
  }

  setUserId(userId: string | null): void {
    this.userIdSubject.next(userId);
    console.log('Setting user ID:', userId);
  }

  getUserIdFromToken(token: string): string | null { //for login
    if (!token) {
      return null;
    }

    const tokenParts = token.split('.');
    if (tokenParts.length !== 3) {
      return null;
    }

    const payload = JSON.parse(atob(tokenParts[1]));
    const userId = payload._id || null;

    return userId;
  }

  logout(): Observable<any> {
    // Clear token and userEmail from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');

    // Update auth status to indicate the user is logged out
    this.updateAuthStatus(false);

    // Return an observable that completes immediately
    return of(null);
  }

  getUserById(userId: string): Observable<UserForAuth | null> {
    return this.httpClient.get<UserForAuth>(`${environment.apiUrl}/auth/${userId}`); // for user-profile
  }



}