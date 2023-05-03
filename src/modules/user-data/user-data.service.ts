import { Injectable, Inject } from '@nestjs/common';
import { UserData } from './entities/user-data.entity';
import { UserDataDto } from './dto/user-data.dto';
import { User } from 'src/users/entities/user.entity';
import { USER_DATA_REPOSITORY } from 'src/core/constants';

@Injectable()
export class UserDataService {
  constructor(
    @Inject(USER_DATA_REPOSITORY)
    private readonly userDataRepository: typeof UserData,
  ) {}

  async create(post: UserDataDto, userId): Promise<UserData> {
    return await this.userDataRepository.create<UserData>({ ...post, userId });
  }

  async findAll(): Promise<UserData[]> {
    return await this.userDataRepository.findAll<UserData>({
      include: [{ model: User, attributes: { exclude: ['password'] } }],
    });
  }
  async findOne(id): Promise<UserData> {
    return await this.userDataRepository.findOne({
      where: { id },
      include: [{ model: User, attributes: { exclude: ['password'] } }],
    });
  }

  async delete(id, userId) {
    return await this.userDataRepository.destroy({ where: { id, userId } });
  }

  async update(id, data, userId) {
    const [numberOfAffectedRows, [updatedUserData]] =
      await this.userDataRepository.update(
        { ...data },
        { where: { id, userId }, returning: true },
      );

    return { numberOfAffectedRows, updatedUserData };
  }
}
