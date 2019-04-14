import { Entity, Column } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';
import { IsEmail } from 'class-validator';
import { Base } from './base';

@ObjectType()
@Entity('users')
export class User extends Base {
    @Field()
    @Column({ unique: true })
    @IsEmail()
    email: string;

    @Field()
    @Column()
    password: string;
}
