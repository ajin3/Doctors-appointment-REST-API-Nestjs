import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Patient } from './patient.model';
import { PatientsController } from './patient.controller';
import { PatientsService } from './patient.service';

@Module({
  imports: [SequelizeModule.forFeature([Patient])],
  controllers: [PatientsController],
  providers: [PatientsService],
})
export class PatientsModule {}
