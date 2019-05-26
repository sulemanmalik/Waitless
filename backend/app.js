const express = require("express");
const { GraphQLServer } = require("graphql-yoga");
const bodyParser = require("body-parser");

const GraphQLResolvers = require("./src/api/resolvers/index")

const app = express();
app.use(bodyParser.json());

// const typeDefs = `
// type Query {
//   info: String!
// }
// `

// // 2
// const resolvers = {
//   Query: {
//     info: () => `This is the API of a Hackernews Clone`
//   }
// }



const server = new GraphQLServer({
  typeDefs: './src/api/schema/schema.graphql',
  resolvers: GraphQLResolvers
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
