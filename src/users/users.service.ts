import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  //Dummy users

  public users = [
    {
      userName: 'ajin',
      password: 'admin',
      email: 'ajin@gmail.com',
    },
    {
      userName: 'sam',
      password: 'root',
      email: 'sam@gmail.com',
    },
  ];

  getUserByUserName(userName: string) {
    return this.users.find((user: User) => user.userName === userName);
  }

  create(createUserDto: CreateUserDto): Promise<User> {
    let user: User = new User();
    user.userName = createUserDto.userName;
    user.password = createUserDto.password;
    user.email = createUserDto.email;
    user.patientName = createUserDto.patientName;
    user.doctorName = createUserDto.doctorName;
    user.startTime = createUserDto.startTime;
    user.endTime = createUserDto.endTime;

    return this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({ id: id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    let user: User = new User();
    user.userName = updateUserDto.userName;
    user.password = updateUserDto.password;
    user.email = updateUserDto.email;
    user.patientName = updateUserDto.patientName;
    user.doctorName = updateUserDto.doctorName;
    user.startTime = updateUserDto.startTime;
    user.endTime = updateUserDto.endTime;
    user.id = id;

    return this.userRepository.save(user);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
