import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  root(): any {
    return {
      returnCode : '200',
      message : 'Hello World',
    };
  }
}
