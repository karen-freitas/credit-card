import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: "abc",
      signOptions: { expiresIn: '3200s' }

    })],
  controllers: [AuthController],
  providers: [AuthService, UserService]
})
export class AuthModule { }