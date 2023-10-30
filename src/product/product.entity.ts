import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  price: string;

  @Column()
  zipcode: string;

  @Column()
  seller: string;

  @Column()
  thumbnailhd: string;

  @Column()
  date: string;
}
