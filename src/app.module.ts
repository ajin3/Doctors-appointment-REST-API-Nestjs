import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { AppointmentsModule } from './appointments/appointment.module';
import { DoctorsModule } from './doctors/doctor.module';
import { PatientsModule } from './patients/patient.module';
import { AuthModule } from './auth/auth.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { Appointment } from './appointments/appointment.model';
import { AppointmentsController } from './appointments/appointment.controller';
import { AppointmentsService } from './appointments/appointment.service';
import { Doctor } from './doctors/doctor.model';
import { Patient } from './patients/patient.model';
import { PatientsController } from './patients/patient.controller';
import { PatientsService } from './patients/patient.service';
import { DoctorsController } from './doctors/doctor.controller';
import { DoctorsService } from './doctors/doctor.service';
import sequelizeModuleConfig from './sequelize.module.configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    SequelizeModule.forFeature([Appointment, Doctor, Patient]),
    SequelizeModule.forRoot(sequelizeModuleConfig),
    AppointmentsModule,
    DoctorsModule,
    PatientsModule,
    //AuthModule,
  ],
  controllers: [
    AppController,
    AppointmentsController,
    PatientsController,
    DoctorsController,
  ],
  providers: [AppService, AppointmentsService, PatientsService, DoctorsService],
})
export class AppModule {}
