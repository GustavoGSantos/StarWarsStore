import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './create-user.dto';
import { CreateUserEntity } from './create-user.entity';

@Injectable()
export class CreateUserService {
  constructor(
    @InjectRepository(CreateUserEntity)
    private readonly userRepository: Repository<CreateUserEntity>,
  ) {}

  async createUser(userDto: CreateUserDto): Promise<CreateUserEntity> {
    const { email, password, name, address } = userDto;

    const user = new CreateUserEntity();
    user.email = email;
    user.password = password;
    user.name = name;
    user.address = address;

    return await this.userRepository.save(user);
  }
}
