import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Login } from '../login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient, private router: Router) { }
  isLoggedIn = false;
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  baseurl = 'http://localhost:3000/v1/session';
  data = {};

  login(info) {
    console.log(info);
    fetch(
      this.baseurl,
      {
        body: JSON.stringify({ email: info.email, password: info.password }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        mode: 'cors'
      }
    ) .then(response => response.json())
      .then(data => {
        console.log(data.data);
        if (data.data.user.authentication_token) {
          localStorage.setItem('isLoggedIn', "true");
          localStorage.setItem('email', data.data.user.email);
          localStorage.setItem('token', data.data.user.authentication_token);
          this.router.navigate(['calender']);

        } else {
          return false;
        }
      });
  }
  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('token');
  }
}
