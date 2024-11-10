import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  date: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true, type: 'text' })
  media: string;  // String to store base64 media data
}
