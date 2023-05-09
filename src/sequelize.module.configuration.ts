import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Doctor } from './doctors/doctor.model';
import { Patient } from './patients/patient.model';
import { Appointment } from './appointments/appointment.model';

const sequelizeModuleConfig: SequelizeModuleOptions = {
  dialect: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'postgres',
  password: 'ajinsam123',
  database: 'doctors-appointment_app_db',
  autoLoadModels: true,
  synchronize: true,
};

const models = [Doctor, Patient, Appointment];

export default { ...sequelizeModuleConfig, models };
