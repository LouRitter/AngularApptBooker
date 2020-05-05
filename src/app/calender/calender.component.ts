import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../shared/appointment.service';
@Component({
  selector: 'apptpicker-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {
  appointments = [];
  email: string;

  constructor(private appointmentService: AppointmentService) {
    appointmentService.appointmentCreated$.subscribe(appointment => {
      this.loadAppointments();
    });
  }

  loadAppointments() {
    this.appointments = this.appointmentService.getList();
  }

  ngOnInit(): void {
    this.email = localStorage.getItem('email');

    this.appointments = this.appointmentService.getList();

  }

}
