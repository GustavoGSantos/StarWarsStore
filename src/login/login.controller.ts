import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}
  @Post()
  public makeLogin(@Body() body): any {
    return this.loginService.makeUserLogin(body.email, body.password);
  }
}
