import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Repository } from 'typeorm';
import { Category } from '../entities';

@Resolver(Category)
export class CategoryResolver {
    constructor(
        @InjectRepository(Category)
        private readonly repository: Repository<Category>
    ) {}

    @Query(() => [Category])
    async categories(): Promise<Category[]> {
        return this.repository.find();
    }

    @Mutation(() => Category)
    async createCategory(@Arg('name') name: string): Promise<Category> {
        const category = new Category();
        category.name = name;
        return this.repository.save(category);
    }
}
