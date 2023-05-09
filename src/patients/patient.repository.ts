import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Patient } from './patient.model';
import { PatientSignupDto } from './../auth/dto/patient.signup.login.dto';

@Injectable()
export class PatientRepository {
  constructor(
    @InjectModel(Patient)
    private patientModel: typeof Patient,
  ) {}

  async findOne(id: number): Promise<Patient | null> {
    return this.patientModel.findOne({ where: { id } });
  }

  async findByEmail(email: string): Promise<Patient | null> {
    return this.patientModel.findOne({ where: { email } });
  }
  async createPatient(patientDto: PatientSignupDto): Promise<Patient> {
    return this.patientModel.create(patientDto);
  }
}
