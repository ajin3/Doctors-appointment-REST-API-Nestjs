import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Doctor } from './doctor.model';

@Injectable()
export class DoctorsService {
  constructor(
    @InjectModel(Doctor)
    private readonly doctorModel: typeof Doctor,
  ) {}

  async findAll(): Promise<Doctor[]> {
    return this.doctorModel.findAll();
  }

  async findOne(id: number): Promise<Doctor> {
    return this.doctorModel.findByPk(id);
  }

  async create(doctor: Doctor): Promise<Doctor> {
    return this.doctorModel.create(doctor);
  }

  async update(id: number, doctor: Doctor): Promise<void> {
    await this.doctorModel.update(doctor, {
      where: { id },
    });
  }

  async delete(id: number): Promise<void> {
    await this.doctorModel.destroy({
      where: { id },
    });
  }
}
