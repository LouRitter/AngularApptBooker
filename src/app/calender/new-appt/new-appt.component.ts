import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../../shared/appointment.service';
@Component({
  selector: 'apptpicker-new-appt',
  templateUrl: './new-appt.component.html',
  styleUrls: ['./new-appt.component.scss']
})
export class NewApptComponent implements OnInit {
  model = new Appointment();

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
  }

  save() {
    this.appointmentService.save(this.model);
  }
}
