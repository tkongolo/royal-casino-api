import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Player } from "./player.entity";
import { RefundRespType } from "./refund-resp-type.model";
import { User } from "./user.entity";
import { VCoinTopUp } from "./vcointopup.entity";

@Entity()
export class RefundRequest{

}