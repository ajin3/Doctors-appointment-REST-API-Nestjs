import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { Patient } from '../patients/patient.model';
import { PatientsService } from '../patients/patient.service';
import { PatientRepository } from '../patients/patient.repository';
import { PatientSignupDto } from './dto/patient.signup.login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly patientsService: PatientsService,
    private readonly jwtService: JwtService,
    private readonly patientRepository: PatientRepository,
  ) {}

  async signup(patientSignupDto: PatientSignupDto): Promise<Patient> {
    return this.patientRepository.createPatient(patientSignupDto);
  }

  async validateUser(email: string, password: string): Promise<Patient | null> {
    const user = await this.patientsService.findByEmail(email);
    if (!user) {
      return null;
    }
    const isMatch = await compare(password, user.password);
    if (!isMatch) {
      return null;
    }
    return user;
  }

  async validateUserById(id: number): Promise<Patient | null> {
    return this.patientsService.findOne(id);
  }

  async login(user: Patient): Promise<{ access_token: string }> {
    const payload = { sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
