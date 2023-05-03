import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  userName: string;
  password: string;
  email: string;
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  patientName: string;
  @Column()
  doctorName: string;
  @Column()
  startTime: number;
  @Column()
  endTime: number;
}
