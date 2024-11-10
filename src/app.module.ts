// src/app.module.ts
import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Event } from './event.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      entities: [Event],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Event]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  async onModuleInit() {
    const events = [
    ];
    for (const event of events) {
      await this.eventRepository.save(event);
    }
    console.log('Database seeded with initial events.');
  }
}

//This is my module of events
