import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Hours } from './Hours'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  password: string;

  @Column()
  userID: number;

  @OneToMany(() => Hours, hours => hours.user) // Link User to many Hours
  hours: Hours[];
}