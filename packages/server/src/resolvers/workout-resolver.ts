import { Resolver, Query } from 'type-graphql';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Repository } from 'typeorm';
import { Workout } from '../entities';

@Resolver(Workout)
export class WorkoutResolver {
    constructor(
        @InjectRepository(Workout)
        private readonly repository: Repository<Workout>
    ) {}

    @Query(() => [Workout])
    async workouts(): Promise<Workout[]> {
        return this.repository.find();
    }
}
