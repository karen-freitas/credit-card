import { JwtAuthGuard } from './../auth/jwt.auth.guard';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth('JWT')
@Controller('user')
export class UserController {

  @Get()
  getHello(): string {
    return 'Olá usuário';
  }
}
