import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Controller, Post, Body } from '@nestjs/common';
import LoginDataDTO from './types/login-data.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor( private authService: AuthService) {}
  @Post('login')
  async login(@Body() loginData: LoginDataDTO){
    const { email, password } = loginData;

    return  this.authService.login(email, password);

  }
}
