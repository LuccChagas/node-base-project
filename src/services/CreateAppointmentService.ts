import  { startOfHour } from 'date-fns';

import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/appointmentsRepository';


interface Request {
  provider: string,
  date: Date,
};

class CreateAppointmentService {
  private appointmentRepository: AppointmentsRepository;

  // inversão de dependencia manual
  constructor(appointmentsRepository: AppointmentsRepository) {
    this.appointmentRepository = appointmentsRepository;

  }

  public execute({ date, provider }: Request): Appointment {

    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = this.appointmentRepository.findByDate(appointmentDate);

    if (findAppointmentInSameDate) {
      throw Error('This appointments is already booked');
    }

    const appointment = this.appointmentRepository.create({
      provider,
      date: appointmentDate,
    });

    return appointment;


  }
}

export default CreateAppointmentService;
