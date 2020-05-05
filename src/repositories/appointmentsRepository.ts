import Appointment from '../models/Appointment';
import { isEqual } from 'date-fns';

//Data Transfer Objet

interface CreateAppointmentDTO {
  provider: string,
  date: Date,
}

class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public all(): Appointment[] {
    return this.appointments;
  }


  public create({provider, date}: CreateAppointmentDTO): Appointment {
    const appointment = new Appointment({provider, date});

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;

