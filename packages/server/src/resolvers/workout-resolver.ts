import { Resolver, Query } from 'type-graphql';
import { Workout } from '../entities';

@Resolver(Workout)
export class WorkoutResolver {
    @Query(() => [Workout])
    async workouts(): Promise<Workout[]> {
        return Workout.find();
    }
}
