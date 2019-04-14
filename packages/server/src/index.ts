import 'reflect-metadata';

import { GraphQLServer } from 'graphql-yoga';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';
import { resolvers } from './resolvers';

async function bootstrap() {
    const connection = createConnection();
    const schema = await buildSchema({ resolvers });
    const server = new GraphQLServer({ schema });
    await connection;
    server.start(() => console.log('Server running on port 4000'));
}

bootstrap();
