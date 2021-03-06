import { Transaction } from 'src/transaction/transaction.entity'
import { UserService } from 'src/user/user.service';
import { CreditCardService } from './credit-card/credit-card.service';
import { Solicitation } from './credit-card/solicitations.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { CreditCardController } from './credit-card/credit-card.controller';
import { CreditCardModule } from './credit-card/credit-card.module';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt.auth.guard';
import { TransactionModule } from './transaction/transaction.module';
import { StatementModule } from './statement/statement.module';
import { BalanceService } from './balance/balance.service';
import { BalanceModule } from './balance/balance.module';
import { BillModule } from './bill/bill.module';
import CreditCard from './credit-card/credit-card.entity';
import { Bill } from './bill/bill.entity';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'mysql',
      entities: [User, Solicitation, CreditCard, Transaction, Bill],
      synchronize: true,
    
    }),
    CreditCardModule,
    UserModule,
    AuthModule,
    TransactionModule,
    StatementModule,
    BalanceModule,
    BillModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController, UserController, CreditCardController],
  providers: [AppService, CreditCardService, UserService, { provide: APP_GUARD, useClass: JwtAuthGuard }, BalanceService,],
})
export class AppModule {}
