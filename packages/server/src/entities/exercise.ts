import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';
import { Category } from './category';
import { BaseEntity } from './base-entity';

@ObjectType({ implements: BaseEntity })
@Entity('exercises')
export class Exercise extends BaseEntity {
    @Field()
    @Column()
    image: string;

    @Field()
    @Column('text')
    description: string;

    @Field(() => [Category])
    @ManyToMany(() => Category)
    @JoinTable()
    categories: Category[];
}
