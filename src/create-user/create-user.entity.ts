import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CreateUserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  address: string;

  @Column()
  password: string;

  @Column()
  confirmPassword: string;
}
