import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, Transaction } from 'typeorm';
import { Player } from './player.entity';
import { TransactionType } from './transaction-type.model';

@Entity()
export class VCoinLedger{
}