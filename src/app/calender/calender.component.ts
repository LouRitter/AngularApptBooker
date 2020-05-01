import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../shared/appointment.service';
@Component({
  selector: 'apptpicker-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {
  appointments = [];
  constructor(private appointmentService: AppointmentService) {
    appointmentService.appointmentCreated$.subscribe(appointment => {
      this.loadAppointments();
    });
  }

  loadAppointments() {
    this.appointments = this.appointmentService.getList();
  }

  ngOnInit(): void {
    this.appointments = this.appointmentService.getList();

  }

}
