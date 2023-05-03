import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  userName: string;
  password: string;
  email: string;
  patientName: string;
  doctorName: string;
  startTime: number;
  endTime: number;
}
