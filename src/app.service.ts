import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

// business logic seperate
// appservice dont need req res 

@Injectable()
export class AppService {
  constructor(private readonly ConfigService: ConfigService) {}
  getHello(): string {
    return this.ConfigService.get('SECRET');
  }
}
