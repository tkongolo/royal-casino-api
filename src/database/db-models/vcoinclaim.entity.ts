import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne } from 'typeorm';
import { Player } from './player.entity';
import { RazorpayPayoutlink } from './razorpay-payoutlink.entity';

@Entity()
export class VCoinClaim{
}