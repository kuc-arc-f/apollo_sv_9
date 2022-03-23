
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
import scheme from './scheme'
import LibTask from './lib/LibTask'

const typeDefs = scheme.getTypeDefs();
/* resolvers */
const resolvers = {
  Query: {
    hello: () => 'Hello world-22',
    /* tasks */
    tasks: async () => {
      return await LibTask.getItems();
    },     
    async task(parent, args, context, info){
      return await LibTask.getTask(args.id);
    },

  },
  Mutation: {
    /* tasks */
    addTask: async (parent, args, context) => {
      const ret = await LibTask.addTask(args)
      return ret
    },
    updateTask: async (parent, args, context) => {
      const ret = await LibTask.updateTask(args)
      return ret
    }, 
    deleteTask: async (parent, args, context) => {
      const ret = await LibTask.deleteTask(args)
      return ret
    },     
  }
};

/* serever-Start */
const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

server.applyMiddleware({ app });
// ENV
//console.log(app.get('env'));
app.listen({ port: 4000 }, () => {
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
});