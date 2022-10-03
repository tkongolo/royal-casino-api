import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Player } from './player.entity';

@Entity()
export class VCoinTopUp{
}