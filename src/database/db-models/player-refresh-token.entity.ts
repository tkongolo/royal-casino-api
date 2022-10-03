import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToOne } from 'typeorm';
import { Player } from './player.entity';

@Entity()
export class PlayerRefreshToken{

}