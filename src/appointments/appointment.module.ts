import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppointmentsController } from './appointment.controller';
import { AppointmentsService } from './appointment.service';
import { Appointment } from './appointment.model';
import { Doctor } from '../doctors/doctor.model';
import { Patient } from '../patients/patient.model';
import { DoctorsModule } from '../doctors/doctor.module';
import { PatientsModule } from '../patients/patient.module';
import { DoctorsService } from 'src/doctors/doctor.service';
import { PatientsService } from 'src/patients/patient.service';

@Module({
  imports: [
    SequelizeModule.forFeature([Appointment, Doctor, Patient]),
    DoctorsModule,
    PatientsModule,
  ],
  controllers: [AppointmentsController],
  providers: [AppointmentsService, DoctorsService, PatientsService],
})
export class AppointmentsModule {}
