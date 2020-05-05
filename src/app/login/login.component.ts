import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { Login } from '../login';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'apptpicker-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: Login = { email: 'admin', password: 'admin@123', token: '12345' };

  email = '';
  password = '';

  loginForm: FormGroup;
  message: string;
  returnUrl: string;
  get f() { return this.loginForm.controls; }
  constructor(private formBuilder: FormBuilder,  private router: Router, private loginService: LoginService) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
   });
    this.returnUrl = '/calender';
    this.loginService.logout();
  }

  authenticate() {
// stop here if form is invalid

    if (this.loginForm.invalid) {
      return;
    }
    else {
      this.model.email = this.loginForm.get('email').value;
      this.model.password = this.loginForm.get('password').value;

      this.loginService.login(this.model);
        // this.authService.authLogin(this.model);

    }
    // else {
    //   this.message = "Please check your userid and password";
    //   }
  }
}
