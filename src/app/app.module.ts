import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalenderComponent } from './calender/calender.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewApptComponent } from './calender/new-appt/new-appt.component';
import { AppointmentService } from './shared/appointment.service';
import { LoginService } from './shared/login.service';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CalenderComponent,
    NewApptComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AppointmentService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
