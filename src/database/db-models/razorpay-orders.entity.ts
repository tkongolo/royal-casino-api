import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Player } from './player.entity';
import { RazorpayOrdersStatusType } from './razorpay-order-status.model';

@Entity()
export class RazorpayOrders{
    
}