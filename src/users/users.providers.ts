import { User } from '../users/entities/user.entity';
import { USER_REPOSITORY } from '../core/constants';

export const usersProviders = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
];
