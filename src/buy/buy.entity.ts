import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class BuyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  client_id: number;

  @Column()
  client_name: string;

  @Column()
  total_to_pay: string;

  @Column()
  card_number: string;

  @Column()
  card_holder_name: string;

  @Column()
  value: string;

  @Column()
  cvv: string;

  @Column()
  exp_date: string;
}
