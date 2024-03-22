import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, } from 'rxjs';
import { User, UserForAuth } from './types/user';
{}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private userEmailSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  private userIdSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null); // Add user ID subject
  private userSubject: BehaviorSubject<UserForAuth | null> = new BehaviorSubject<UserForAuth | null>(null); // Add userSubject
  userEmail$: Observable<string | null> = this.userEmailSubject.asObservable();
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();
  userId$: Observable<string | null> = this.userIdSubject.asObservable(); // Add user ID observable
  user$: Observable<UserForAuth | null> = this.userSubject.asObservable(); // Add user observable

  constructor() { }

  // Method to set user object
  setUser(user: UserForAuth): void {
    console.log(`setting user: ${JSON.stringify(user)}`)
    this.userSubject.next(user); // Fix: Use userSubject to emit user object
  }

  updateAuthStatus(isLoggedIn: boolean): void {
    this.isLoggedInSubject.next(isLoggedIn);
  }

  getAuthStatus(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  setUserEmail(email: string | null): void {
    console.log('Setting user email:', email); // Add logging statement
    localStorage.setItem('userEmail', email || ''); // set email to localstorage
    this.userEmailSubject.next(email);
  }

  getUserEmail(): Observable<string | null> {
    console.log('Getting user email:', this.userEmailSubject.getValue()); // Add logging statement
    return this.userEmail$;
  }

  setUserId(userId: string | null): void { // Implement setUserId method
    this.userIdSubject.next(userId);
    console.log('Setting user ID:', userId);
  }

  getUserIdFromToken(token: string): string | null {
    if (!token) {
        return null; // Token is empty or undefined
    }

    // Split the token into its parts
    const tokenParts = token.split('.');
    if (tokenParts.length !== 3) {
        return null; // Invalid token format
    }

    // Decode the payload part of the token (second part)
    const payload = JSON.parse(atob(tokenParts[1]));

    // Extract the user ID from the payload
    const userId = payload._id || null; // Extracting user ID from the '_id' field

    return userId;
  }
}
