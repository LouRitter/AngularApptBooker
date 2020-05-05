import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'apptpicker-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbarOpen = false;
  private logger = new Subject<boolean>();

  constructor(public router: Router) { }

  ngOnInit(): void {

  }


  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  getLogin(){
    return localStorage.getItem('isLoggedIn');
 }
}
