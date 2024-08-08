import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './userEntity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User)
  user!: User;

  @Column()
  photoUrl!: string;

  @Column()
  caption!: string;

  @Column('simple-array')
  hashtags!: string[];

  @Column('json')
  clothingInfo!: {
    brand: string;
    model: string;
    modelNumber: string;
    url: string;
  };

  @Column({ default: 0 })
  likes!: number;

  @Column('json', { default: '[]' })
  comments!: any[];
}
