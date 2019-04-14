import { Resolver, Query, Mutation, Args } from 'type-graphql';
import { Exercise, Category } from '../entities';
import { ExerciseArgs } from './exercise-args';

@Resolver(Exercise)
export class ExerciseResolver {
    @Query(() => [Exercise])
    async exercises(): Promise<Exercise[]> {
        return Exercise.find();
    }

    @Mutation(() => Exercise)
    async createExercise(@Args()
    {
        description,
        image,
        categories
    }: ExerciseArgs): Promise<Exercise> {
        const exercise = new Exercise();
        exercise.description = description;
        exercise.image = image;
        exercise.categories = await Category.findByIds(categories);
        return exercise.save();
    }
}
