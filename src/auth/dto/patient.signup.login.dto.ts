
export class PatientLoginDto {
  email: string;

  password: string;
}

export class PatientSignupDto {
  name: string;

  email: string;

  password: string;
}

export class PatientAuthDto extends PatientSignupDto {
  passwordConfirmation: string;
}
