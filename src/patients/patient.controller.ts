import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { PatientsService } from '../patients/patient.service';
import { Patient } from './patient.model';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Get()
  async findAll(): Promise<Patient[]> {
    return this.patientsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Patient> {
    return this.patientsService.findOne(id);
  }

  @Post()
  async create(@Body() patient: Patient): Promise<Patient> {
    return this.patientsService.create(patient);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() patient: Patient,
  ): Promise<void> {
    await this.patientsService.update(id, patient);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.patientsService.delete(id);
  }
}
