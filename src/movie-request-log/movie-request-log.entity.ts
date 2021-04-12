import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MovieRequestLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  requestTimestamp: Date;

  @Column()
  method: string;

  @Column()
  pathname: string;

  @Column({ nullable: true })
  query: string
}