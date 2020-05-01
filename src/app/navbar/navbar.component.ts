import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'apptpicker-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbarOpen = false;

  constructor() { }

  ngOnInit(): void {
  }


  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
