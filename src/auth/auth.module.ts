import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    PassportModule,
    UsersModule,
    JwtModule.register({
      secret: process.env.JWTKEY,
      signOptions: { expiresIn: process.env.TOKEN_EXPIRATION },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}

// import { Module } from '@nestjs/common';
// import { PassportModule } from '@nestjs/passport';
// import { UsersModule } from 'src/users/users.module';
// import { LocalStrategy } from './local.strategy';
// import { JwtModule } from '@nestjs/jwt';
// import { AuthService } from './auth.service';
// import { JwtStrategy } from './jwt.strategy';

// @Module({
//   imports: [
//     PassportModule,
//     UsersModule,
//     JwtModule.register({
//       secret: 'key',
//       signOptions: {
//         expiresIn: '60s',
//       },
//     }),
//   ],
//   providers: [LocalStrategy, JwtStrategy, AuthService],
//   exports: [AuthService],
// })
// export class AuthModule {}
