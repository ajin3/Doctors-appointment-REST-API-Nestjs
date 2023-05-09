import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DoctorsController } from '../doctors/doctor.controller';
import { DoctorsService } from '../doctors/doctor.service';
import { Doctor } from '../doctors/doctor.model';

@Module({
  imports: [SequelizeModule.forFeature([Doctor])],
  controllers: [DoctorsController],
  providers: [DoctorsService],
})
export class DoctorsModule {}
