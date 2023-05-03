import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  userName: string;

  @Column({
    type: DataType.NUMBER,
    unique: true,
    allowNull: false,
  })
  password: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  patientName: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  doctorName: string;

  @Column({
    type: DataType.NUMBER,
    allowNull: true,
  })
  startTime: number;

  @Column({
    type: DataType.NUMBER,
    allowNull: true,
  })
  endTime: number;
}
