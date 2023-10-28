import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserService } from './create-user.service';
import { CreateUserDto } from './create-user.dto';

@Controller('create-user')
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.createUserService.createUser(createUserDto);
  }
}
