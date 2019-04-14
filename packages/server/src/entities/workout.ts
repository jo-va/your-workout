import { Entity } from 'typeorm';
import { ObjectType } from 'type-graphql';
import { Base } from './base';

@ObjectType()
@Entity('workouts')
export class Workout extends Base {}
