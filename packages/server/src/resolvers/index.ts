import { UserResolver } from './user-resolver';
import { WorkoutResolver } from './workout-resolver';
import { ExerciseResolver } from './exercise-resolver';
import { CategoryResolver } from './category-resolver';

export const resolvers = [
    UserResolver,
    WorkoutResolver,
    ExerciseResolver,
    CategoryResolver
];
