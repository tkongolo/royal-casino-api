import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from 'typeorm';
import { RolePermissions } from './role-permissions.entity';

@Entity()
export class UserRole{

}