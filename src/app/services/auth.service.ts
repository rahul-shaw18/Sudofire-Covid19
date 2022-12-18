import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn: boolean = false;

  constructor(private router: Router) {}

  login() {
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }

  IsAuthenticated() {
    return this.loggedIn;
  }
}
