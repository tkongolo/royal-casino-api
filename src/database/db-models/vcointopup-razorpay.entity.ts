import { Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Player } from "./player.entity";
import { RazorpayOrders } from "./razorpay-orders.entity";

@Entity()
export class VcoinTopUpRazorPay{
}