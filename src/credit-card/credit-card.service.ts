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
    @InjectRepository(Solicitation) private solicitationRepository: Repository<Solicitation>
  
  ) {}
  async createSolicitation(creditCardRequest: CreditCardRequestDTO) {
   
    // Criar usuário ok
    // Criar solicitação do usuário ok 
    // verificar aprovação do usuário
    // ativar usuário caso seja aprovado

   
    const user = await this.userRepository.save(
      this.userRepository.create({
        name:creditCardRequest.name,
        cpf: creditCardRequest.cpf,
        email: creditCardRequest.email,
        password: creditCardRequest.password,
      })
    );

    const approved = this.isApproved()

    await this.solicitationRepository.save(
      this.solicitationRepository.create({
        preferredDueDay:creditCardRequest.preferredDueDay,
        user:user,
        status: approved ? SolicitationStatus.APPROVED: SolicitationStatus.DENIED
      

      })
    )

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

