import {
  Model,
  Table,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Doctor } from '../doctors/doctor.model';
import { Patient } from '../patients/patient.model';

@Table
export class Appointment extends Model<Appointment> {
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  startTime: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  endTime: Date;

  @Column({
    type: DataType.DATEONLY,
    allowNull: false,
  })
  date: Date;

  @ForeignKey(() => Doctor)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  doctorId: number;

  @BelongsTo(() => Doctor)
  doctor: Doctor;

  @ForeignKey(() => Patient)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  patientId: number;

  @BelongsTo(() => Patient)
  patient: Patient;
}
