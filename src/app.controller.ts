import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  login(@Request() req): string {
    return this.authService.generateToken(req.user);
  }

  @Get('/patient-one')
  @UseGuards(AuthGuard('jwt'))
  patientOneData(@Request() req): string {
    return 'This is patient one data' + JSON.stringify(req.user);
  }

  @Get('/patient-two')
  @UseGuards(AuthGuard('jwt'))
  patientTwoData(@Request() req): string {
    return 'This is patient two data' + JSON.stringify(req.user);
  }
}
