import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AppointmentService {
  private appointmentCreatedSource = new Subject<string>();
  appointmentCreated$ = this.appointmentCreatedSource.asObservable();

  constructor() { }

  save(appointment) {

    let appointments = JSON.parse(localStorage.getItem('appointments'));
    if (appointments == null) {
      appointments = [];
    }
    appointments.push(appointment);
    console.log("HERE");
    localStorage.setItem('appointments', JSON.stringify(appointments));
    this.appointmentCreatedSource.next(appointment);

  }

  getList() {
    return JSON.parse(localStorage.getItem('appointments'));
  }
}
