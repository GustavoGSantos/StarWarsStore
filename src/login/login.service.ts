import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LoginService {
  public makeUserLogin(email: string, password: string) {
    if (email === 'teste@gmail.com' && password === '123456') {
      return {
        message: 'User logged successfully',
      };
    } else {
      throw new UnauthorizedException(
        undefined,
        'Email or password does not match',
      );
    }
  }
}
