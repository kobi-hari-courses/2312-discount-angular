import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  private isLoggedIn$ = new BehaviorSubject(this.isLoggedIn);

  constructor() { }

  getStatus() {
    return this.isLoggedIn$.asObservable();
  }

  login() {
    this.isLoggedIn = true;
    this.isLoggedIn$.next(this.isLoggedIn);
  }

  logout() {
    this.isLoggedIn = false;
    this.isLoggedIn$.next(this.isLoggedIn);
  }
}
