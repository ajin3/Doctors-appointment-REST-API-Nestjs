import { Model, Table, Column, DataType, HasMany } from 'sequelize-typescript';
import { Appointment } from '../appointments/appointment.model';

@Table
export class Patient extends Model<Patient> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @HasMany(() => Appointment)
  appointments: Appointment[];
}
