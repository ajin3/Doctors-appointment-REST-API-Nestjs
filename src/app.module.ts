import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './core/database/database.module';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    DatabaseModule,
    JwtModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],

  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
