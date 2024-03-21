import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private userEmailSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  userEmail$: Observable<string | null> = this.userEmailSubject.asObservable();

  constructor() { }

  updateAuthStatus(isLoggedIn: boolean): void {
    this.isLoggedInSubject.next(isLoggedIn);
  }

  getAuthStatus(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  setUserEmail(email: string | null): void {
    console.log('Setting user email:', email); // Add logging statement
    this.userEmailSubject.next(email);
  }

  getUserEmail(): Observable<string | null> {
    console.log('Getting user email:', this.userEmailSubject.getValue()); // Add logging statement
    return this.userEmail$;
  }
}