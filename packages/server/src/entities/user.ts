import { Entity, Column } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';
import { IsEmail } from 'class-validator';
import { BaseEntity } from './base-entity';

@ObjectType({ implements: BaseEntity })
@Entity('users')
export class User extends BaseEntity {
    @Field()
    @Column({ unique: true })
    @IsEmail()
    email: string;

    @Field()
    @Column()
    password: string;
}
