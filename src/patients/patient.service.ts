import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Patient } from './patient.model';

@Injectable()
export class PatientsService {
  constructor(
    @InjectModel(Patient)
    private readonly patientModel: typeof Patient,
  ) {}

  async findAll(): Promise<Patient[]> {
    return this.patientModel.findAll();
  }

  async findOne(id: number): Promise<Patient> {
    return this.patientModel.findByPk(id);
  }

  async findByEmail(email: string): Promise<Patient | null> {
    return this.patientModel.findOne({ where: { email } });
  }

  async findOneByEmail(email: string): Promise<Patient> {
    return this.patientModel.findOne({
      where: {
        email,
      },
    });
  }

  async create(patient: Patient): Promise<Patient> {
    return this.patientModel.create(patient);
  }

  async update(id: number, patient: Patient): Promise<void> {
    await this.patientModel.update(patient, {
      where: { id },
    });
  }

  async delete(id: number): Promise<void> {
    await this.patientModel.destroy({
      where: { id },
    });
  }

  
}
