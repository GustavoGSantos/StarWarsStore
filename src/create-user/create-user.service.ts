import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateUserService {
  validateEmail(email: string): boolean {
    if (!email) {
      return false; // If the email is null or empty the validation will fail
    }
    return true;
  }

  validatePassword(password: string): boolean {
    if (!password) {
      return false;
    }
    return true;
  }

  validateConfirmPassword(password: string, confirmPassword: string): boolean {
    if (!confirmPassword || confirmPassword !== password) {
      return false;
    }
    return true;
  }

  validateName(name: string): boolean {
    if (!name) {
      return false;
    }
    return true;
  }

  validateAddress(address: string): boolean {
    if (!address) {
      return false;
    }
    return true;
  }
}
