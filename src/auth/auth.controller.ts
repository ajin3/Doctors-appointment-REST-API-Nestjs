import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt.auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('signup')
  async signup(@Request() req) {
    return this.authService.signup(req.body);
  }

  @UseGuards(JwtAuthGuard)
  @Post('profile')
  async getProfile(@Request() req) {
    return req.user;
  }
}
