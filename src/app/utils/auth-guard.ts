import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard {

  constructor( private router: Router ) {
  }

  canActivate() {
    const authToken = JSON.parse(localStorage.getItem('authToken'));
    if (authToken) {
        return true;
    }else {
        // Redirect to login
        this.router.navigate(['']);
    }
  }
}
