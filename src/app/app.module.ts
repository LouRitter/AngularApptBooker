import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalenderComponent } from './calender/calender.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewApptComponent } from './calender/new-appt/new-appt.component';
import { AppointmentService } from './shared/appointment.service';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    CalenderComponent,
    NewApptComponent,
    NavbarComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
