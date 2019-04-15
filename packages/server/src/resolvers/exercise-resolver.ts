import { Resolver, Query, Mutation, Args } from 'type-graphql';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Exercise, Category } from '../entities';
import { ExerciseArgs } from './types/exercise-args';

@Resolver(Exercise)
export class ExerciseResolver {
    constructor(
        @InjectRepository(Exercise)
        private readonly repository: Repository<Exercise>,
        @InjectRepository(Category)
        private readonly categoriesRepository: Repository<Category>
    ) {}

    @Query(() => [Exercise])
    async exercises(): Promise<Exercise[]> {
        return this.repository.find({ relations: ['categories'] });
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
        exercise.categories = await this.categoriesRepository.findByIds(
            categories
        );
        return this.repository.save(exercise);
    }
}
