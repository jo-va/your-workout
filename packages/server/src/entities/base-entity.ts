import {
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm';
import { Field, ID, InterfaceType } from 'type-graphql';
import { IsDate } from 'class-validator';

@InterfaceType()
export abstract class BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    @IsDate()
    createdAt: Date;

    @UpdateDateColumn()
    @IsDate()
    updatedAt: Date;
}
