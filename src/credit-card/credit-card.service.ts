import { UserService } from 'src/user/user.service';
import { Solicitation } from './solicitations.entity';
import { User } from 'src/user/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import CreditCardRequestDTO from './types/credit-card-request.dto';
import { Repository } from 'typeorm'
import SolicitationStatus from './enum/solicitation-status.enum';

@Injectable()
export class CreditCardService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Solicitation)
    private solicitationRepository: Repository<Solicitation>,
    private userService: UserService,
  ) {}

  async createSolicitation(creditCardRequest: CreditCardRequestDTO) {
    const user = await this.userService.createUser({
      email: creditCardRequest.email,
      name: creditCardRequest.name,
      password: creditCardRequest.password,
      cpf: creditCardRequest.cpf

    })
    const approved = this.isApproved()

    await this.solicitationRepository.save(
      this.solicitationRepository.create({
        preferredDueDay:creditCardRequest.preferredDueDay,
        user:user,
        status: approved ? SolicitationStatus.APPROVED: SolicitationStatus.DENIED
      })
    );

    return approved

  }

  private isApproved(){
    const score = this.requestScore();
    return score >= 600 ? true: false
  }

  private requestScore() {
    return this.randomIntFromInterval(0, 1000);
  }
  
  private randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

