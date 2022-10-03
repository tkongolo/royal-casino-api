import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Player } from "./player.entity";
import { TopupType } from "./topup-type.model";

@Entity()
export class VcoinTopUpCompiled{
}