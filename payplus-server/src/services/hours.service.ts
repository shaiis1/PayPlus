import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Hours } from 'src/entities/Hours';
import { Repository } from 'typeorm';

@Injectable()
export class HoursService {
  constructor(
    @InjectRepository(Hours)
    private hoursRepository: Repository<Hours>,
  ) {}

  async findHoursByUserAndMonth(userId: number, date: Date): Promise<Hours[]> {
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth(); // Note: January is 0, February is 1, and so on.

    const startDate = new Date(currentYear, currentMonth, 1); // First day of the current month
    const endDate = new Date(currentYear, currentMonth + 1, 0); // Last day of the current month

    return this.hoursRepository
      .createQueryBuilder('hours')
      .where('hours.userId = :userId', { userId })
      .andWhere('hours.date >= :startDate AND hours.date <= :endDate', {
        startDate,
        endDate,
      })
      .getMany();
  }
}
