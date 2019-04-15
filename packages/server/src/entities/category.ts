import { Entity, Column } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';
import { BaseEntity } from './base-entity';

@ObjectType({ implements: BaseEntity })
@Entity('categories')
export class Category extends BaseEntity {
    @Field()
    @Column({ unique: true })
    name: string;
}
