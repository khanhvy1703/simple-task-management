import { ApolloServer } from 'apollo-server-express';
import Express from 'express';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { connect } from 'mongoose';
import * as dotenv from 'dotenv';

import { TaskResolver } from './resolvers/tasks.resolvers';

const main = async () => {
  dotenv.config();

  const schema = await buildSchema({
    resolvers: [TaskResolver],
    emitSchemaFile: true,
    validate: false,
  })

  const mongoose = await connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.qhe84.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)

  await mongoose.connection;

  const apollo = new ApolloServer({schema: schema})
  const express = Express();

  await apollo.start()
  apollo.applyMiddleware({app: express})
  express.listen({port: process.env.PORT || 5000}, () => {
    console.log(`Server ready and listening at ==> http://localhost:${process.env.PORT}${apollo.graphqlPath}`)
  })
}

main().catch((error) => {
  console.log(error);
})