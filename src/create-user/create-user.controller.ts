import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { CreateUserService } from './create-user.service';

@Controller('create-user')
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}
  @Post()
  public makeCreateUser(@Body() createUserDto: CreateUserDto) {
    if (this.createUserService.validateEmail(createUserDto.email) === false) {
      throw new HttpException(
        'Email should not be empty',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (
      this.createUserService.validatePassword(createUserDto.password) === false
    ) {
      throw new HttpException(
        'Password should not be empty',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (
      this.createUserService.validateConfirmPassword(
        createUserDto.password,
        createUserDto.confirmPassword,
      ) === false
    ) {
      throw new HttpException(
        'Password does not match',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (this.createUserService.validateName(createUserDto.name) === false) {
      throw new HttpException(
        'Name should not be empty',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (
      this.createUserService.validateAddress(createUserDto.address) === false
    ) {
      throw new HttpException(
        'Address should not be empty',
        HttpStatus.BAD_REQUEST,
      );
    }

    return 'User created successfully';
  }
}
