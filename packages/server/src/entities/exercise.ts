import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';
import { Category } from './category';
import { Base } from './base';

@ObjectType()
@Entity('exercises')
export class Exercise extends Base {
    @Field()
    @Column()
    image: string;

    @Field()
    @Column()
    description: string;

    @Field(() => [Category])
    @ManyToMany(() => Category)
    @JoinTable()
    categories: Category[];
}
