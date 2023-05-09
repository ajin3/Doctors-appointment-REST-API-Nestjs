import { Appointment } from './appointment.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Doctor } from '../doctors/doctor.model';
import { Patient } from '../patients/patient.model';
import { Op } from 'sequelize';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectModel(Appointment)
    private readonly appointmentModel: typeof Appointment,
    @InjectModel(Doctor)
    private readonly doctorModel: typeof Doctor,
    @InjectModel(Patient)
    private readonly patientModel: typeof Patient,
  ) {}

  async findAll(): Promise<Appointment[]> {
    return this.appointmentModel.findAll({
      include: [Doctor, Patient],
    });
  }

  async findOne(id: number): Promise<Appointment> {
    return this.appointmentModel.findByPk(id, {
      include: [Doctor, Patient],
    });
  }

  async create(appointment: Appointment): Promise<Appointment> {
    return this.appointmentModel.create(appointment);
  }

  async update(id: number, appointment: Appointment): Promise<void> {
    await this.appointmentModel.update(appointment, {
      where: { id },
    });
  }

  async delete(id: number): Promise<void> {
    await this.appointmentModel.destroy({
      where: { id },
    });
  }

  async findAvailableAppointments(): Promise<Appointment[]> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return this.appointmentModel.findAll({
      where: {
        startTime: {
          [Op.gte]: today,
        },
      },
      include: [Doctor, Patient],
    });
  }

  async bookAppointment(
    doctorId: number,
    patientId: number,
    startTime: Date,
  ): Promise<Appointment> {
    const existingAppointment = await this.appointmentModel.findOne({
      where: {
        doctorId,
        startTime,
      },
    });

    if (existingAppointment) {
      throw new Error('Appointment already booked');
    }

    const appointment = await this.appointmentModel.create({
      doctorId,
      patientId,
      startTime,
      endTime: new Date(startTime.getTime() + 30 * 60000),
      date: startTime,
    });

    return appointment;
  }
}
