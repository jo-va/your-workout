import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import * as bcrypt from 'bcryptjs';
import { User } from '../entities';

@Resolver(User)
export class UserResolver {
    @Query(() => String)
    hello(@Arg('name') name: string): string {
        return `Well done dear ${name || 'Follower'}`;
    }

    @Mutation(() => User)
    async register(
        @Arg('email') email: string,
        @Arg('password') password: string
    ): Promise<User> {
        const user = new User();
        user.email = email;
        user.password = await bcrypt.hash(password, 10);
        return user.save();
    }
}
