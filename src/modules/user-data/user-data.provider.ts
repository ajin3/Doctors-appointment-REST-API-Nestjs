import { UserData } from './entities/user-data.entity';
import { USER_DATA_REPOSITORY } from '../../core/constants';

export const userDataProviders = [
  {
    provide: USER_DATA_REPOSITORY,
    useValue: UserData,
  },
];
