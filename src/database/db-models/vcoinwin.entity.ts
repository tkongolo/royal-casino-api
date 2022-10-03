import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Games } from './games.entity';
import { Player } from './player.entity';

@Entity()
export class VCoinWin{
}