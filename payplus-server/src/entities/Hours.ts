import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import {User} from './User'

@Entity()
export class Hours {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startTime: Date;

  @Column()
  stopTime: Date; // Remember to securely hash passwords in real applications

  @Column()
  totalTime: number;

  @Column()
  breakTime: number;

  @OneToOne(() => User, user => user.hours) // Specify inverse side as a second parameter
  @JoinColumn({name: 'id'}) // This decorator is optional if you want to explicitly define the join column
  user: User;
}
