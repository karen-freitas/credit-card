import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {

  @Get()
  gethello(): string {
    return "Olá usuário";
  }
}
