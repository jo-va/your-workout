import { Resolver, Arg, Mutation } from 'type-graphql';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { User } from '../entities';

@Resolver(User)
export class UserResolver {
    constructor(
        @InjectRepository(User)
        private readonly repository: Repository<User>
    ) {}

    @Mutation(() => User)
    async register(
        @Arg('email') email: string,
        @Arg('password') password: string
    ): Promise<User> {
        const user = new User();
        user.email = email;
        user.password = await bcrypt.hash(password, 10);
        return this.repository.save(user);
    }
}
