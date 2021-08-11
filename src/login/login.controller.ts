import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { LoginDto } from './login.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}
  @Post()
  public makeLogin(@Body(ValidationPipe) loginDto: LoginDto): any {
    return this.loginService.makeUserLogin(loginDto.email, loginDto.password);
  }
}
