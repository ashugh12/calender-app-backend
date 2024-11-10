import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Controller('api/events')
export class AppController{
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ){}

  @Get() 
  async findAll(): Promise<Event[]> { 
    const events = await this.eventRepository.find(); 
    console.log('Fetched Events:', events); 
    return events;
  }
}
