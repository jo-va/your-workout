import 'reflect-metadata';
import { GraphQLServer } from 'graphql-yoga';
import { buildSchema } from 'type-graphql';
import { Container } from 'typedi';
import { createConnection, useContainer } from 'typeorm';
import { resolvers } from './resolvers';

useContainer(Container);

async function bootstrap() {
    const connection = createConnection();
    const schema = await buildSchema({ resolvers, container: Container });
    const server = new GraphQLServer({ schema });
    await connection;
    server.start(() => console.log('Server running on port 4000'));
}

bootstrap();
