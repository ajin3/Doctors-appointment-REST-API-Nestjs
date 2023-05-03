import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
  Request,
} from '@nestjs/common';
import { UserDataService } from './user-data.service';
import { UserData as UserDataEntity } from './entities/user-data.entity';
import { UserDataDto } from './dto/user-data.dto';

@Controller('userData')
export class UserDataController {
  constructor(private readonly userDataService: UserDataService) {}

  @Get()
  async findAll() {
    return await this.userDataService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<UserDataEntity> {
    const post = await this.userDataService.findOne(id);

    if (!post) {
      throw new NotFoundException("This Post doesn't exist");
    }

    return post;
  }
  @Post()
  async create(
    @Body() post: UserDataDto,
    @Request() req,
  ): Promise<UserDataEntity> {
    return await this.userDataService.create(post, req.user.id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() post: UserDataDto,
    @Request() req,
  ): Promise<UserDataEntity> {
    const { numberOfAffectedRows, updatedUserData } =
      await this.userDataService.update(id, post, req.user.id);

    if (numberOfAffectedRows === 0) {
      throw new NotFoundException("This Post doesn't exist");
    }

    return updatedUserData;
  }

  @Delete(':id')
  async remove(@Param('id') id: number, @Request() req) {
    const deleted = await this.userDataService.delete(id, req.user.id);

    if (deleted === 0) {
      throw new NotFoundException("This Post doesn't exist");
    }

    return 'Successfully deleted';
  }
}
