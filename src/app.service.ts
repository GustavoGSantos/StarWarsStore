import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  customHello(name: string): any {
    return {
      message: `Hello ${name}`,
    };
  }
}
