import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/user.entity';
import { Injectable } from '@nestjs/common';
import UserDTO from './types/user.dto';

@Injectable()
export class UserService {
  constructor (
    @InjectRepository(User) private userRepository: Repository<User>

  ){}
  async createUser(user:UserDTO) {
    const userEntity = this.userRepository.create(user)
     return this.userRepository.save(userEntity)

  }
}
