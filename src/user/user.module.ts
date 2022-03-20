import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import {User} from './user.entity'

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  exports: [TypeOrmModule]
})
export class UserModule {}
