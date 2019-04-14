import { ArgsType, Field, ID } from 'type-graphql';

@ArgsType()
export class ExerciseArgs {
    @Field()
    description: string;

    @Field()
    image: string;

    @Field(() => [ID])
    categories: string[];
}
