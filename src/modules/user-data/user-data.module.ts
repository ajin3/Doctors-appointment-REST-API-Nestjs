import { Module } from '@nestjs/common';
import { UserDataService } from './user-data.service';
import { UserDataController } from './user-data.controller';
import { userDataProviders } from './user-data.provider';

@Module({
  providers: [UserDataService, ...userDataProviders],
  controllers: [UserDataController],
})
export class UserDataModule {}
