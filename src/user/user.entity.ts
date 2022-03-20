import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// import UserStatus from './enum/user-status.enum';

@Entity({name:'User', schema:'public'})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column({ unique: true })
  email: string;

  @Column({unique:true})
  cpf: string;

  // @Column()
  // status: UserStatus;
}