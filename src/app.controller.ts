import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './event.entity';

@Controller('api/events')
export class AppController {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  @Get()
  async findAll(): Promise<Event[]> {
    return await this.eventRepository.find();
  }

  @Post()
  async create(@Body() eventData: Partial<Event>): Promise<Event> {
    const event = this.eventRepository.create(eventData);
    return await this.eventRepository.save(event);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() eventData: Partial<Event>): Promise<Event> {
    const eventId = parseInt(id.toString(), 10);
    await this.eventRepository.update(eventId, eventData);
    return await this.eventRepository.findOne({ where: { id: eventId } });
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    const eventId = parseInt(id.toString(), 10);
    await this.eventRepository.delete(eventId);
  }
}
