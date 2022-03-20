import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/user.entity';
import { Injectable } from '@nestjs/common';
import UserDTO from './types/user.dto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
  constructor (
    @InjectRepository(User) private userRepository: Repository<User>

  ){}

  async createUser(user:UserDTO) {
    const encryptedPassword = await this.encryptPassword(user.password)
    const userEntity = this.userRepository.create({...user, password: encryptedPassword})
     return this.userRepository.save(userEntity)
  }

  private encryptPassword(password:string) {
    return bcrypt.hash(password, 10)
  }


}
