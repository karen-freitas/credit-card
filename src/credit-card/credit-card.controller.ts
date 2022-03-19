import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
// import { IsPublic } from 'src/auth/is-public.decorator';
import { CreditCardService } from './credit-card.service';
import CreditCardRequestDTO from './types/credit-card-request.dto';

// @IsPublic()
@ApiTags('Solicitation')
@Controller('credit-card')
export class CreditCardController {
  // constructor(private creditCardService: CreditCardService) {}
  // constructor( 
  //   @InjectRepository(User) private userRepository: Repository<User>,
  // ){}

  // @Post('request')
  // async request(@Body() creditCardRequest: CreditCardRequestDTO) {
  //   await this.userRepository.save(
  //     this.userRepository.create({
  //       name:creditCardRequest.name,
  //       cpf: creditCardRequest.cpf,
  //       password: creditCardRequest.password,
  //       email: creditCardRequest.email
  //     })
  // )
  // async request(@Body() creditCardRequest: CreditCardRequestDTO) {
  //   const approved = await this.creditCardService.createSolicitation(
  //     creditCardRequest,
  //   );

  //   return {
  //     approved:true,
  //   };
  // }
}
