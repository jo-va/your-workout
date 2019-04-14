import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { Category } from '../entities';

@Resolver(Category)
export class CategoryResolver {
    @Query(() => [Category])
    async categories(): Promise<Category[]> {
        return Category.find();
    }

    @Mutation(() => Category)
    async createCategory(@Arg('name') name: string): Promise<Category> {
        const category = new Category();
        category.name = name;
        return category.save();
    }
}
