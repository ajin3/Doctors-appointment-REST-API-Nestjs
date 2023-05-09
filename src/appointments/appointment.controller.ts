import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AppointmentsService } from '../appointments/appointment.service';
import { Appointment } from '../appointments/appointment.model';
import { DoctorsService } from '../doctors/doctor.service';
import { PatientsService } from '../patients/patient.service';
import { JwtAuthGuard } from '../auth/jwt.auth.guard';

@Controller('appointments')
export class AppointmentsController {
  constructor(
    private readonly appointmentsService: AppointmentsService,
    private readonly doctorsService: DoctorsService,
    private readonly patientsService: PatientsService,
  ) {}

  @Get()
  async findAll(): Promise<Appointment[]> {
    return this.appointmentsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Appointment> {
    return this.appointmentsService.findOne(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async bookAppointment(
    @Body('doctorId') doctorId: number,
    @Body('startTime') startTime: string,
    @Request() req,
  ): Promise<Appointment> {
    const patient = await this.patientsService.findOneByEmail(req.user.email);
    const appointmentStartTime = new Date(startTime);

    return this.appointmentsService.bookAppointment(
      doctorId,
      patient.id,
      appointmentStartTime,
    );
  }

  @Get('available')
  async findAvailableAppointments(): Promise<Appointment[]> {
    return this.appointmentsService.findAvailableAppointments();
  }

  @Get('doctor/:id/appointments')
  async findAppointmentsByDoctor(
    @Param('id') id: number,
  ): Promise<Appointment[]> {
    const doctor = await this.doctorsService.findOne(id);
    return doctor.appointments;
  }
}
