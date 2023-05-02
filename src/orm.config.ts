import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  username: 'postgres',
  password: 'ajinsam123',
  port: 5432,
  host: '127.0.0.1',
  database: 'doctors-appointment_app_db',
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
  logging: true,
};
