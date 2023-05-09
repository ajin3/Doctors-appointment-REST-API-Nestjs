import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { DoctorsService } from '../doctors/doctor.service';
import { Doctor } from './doctor.model';

@Controller('doctors')
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) {}

  @Get()
  async findAll(): Promise<Doctor[]> {
    return this.doctorsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Doctor> {
    return this.doctorsService.findOne(id);
  }

  @Post()
  async create(@Body() doctor: Doctor): Promise<Doctor> {
    return this.doctorsService.create(doctor);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() doctor: Doctor): Promise<void> {
    await this.doctorsService.update(id, doctor);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.doctorsService.delete(id);
  }
}
