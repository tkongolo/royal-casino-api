import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Player } from "./player.entity";
import { RazorpayPayoutStatusType } from "./razorpay-payoutlink-status.model";

@Entity()
export class RazorpayPayoutlink{
}