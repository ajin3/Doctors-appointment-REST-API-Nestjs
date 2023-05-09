import { Model, Table, Column, DataType, HasMany } from 'sequelize-typescript';
import { Appointment } from '../appointments/appointment.model';

@Table
export class Doctor extends Model<Doctor> {
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
