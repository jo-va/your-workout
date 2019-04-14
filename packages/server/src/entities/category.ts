import { Entity, Column } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';
import { Base } from './base';

@ObjectType()
@Entity('categories')
export class Category extends Base {
    @Field()
    @Column({ unique: true })
    name: string;
}
