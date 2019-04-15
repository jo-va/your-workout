import { Entity } from 'typeorm';
import { ObjectType } from 'type-graphql';
import { BaseEntity } from './base-entity';

@ObjectType({ implements: BaseEntity })
@Entity('workouts')
export class Workout extends BaseEntity {}
