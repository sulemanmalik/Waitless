const express = require("express");
const { GraphQLServer } = require("graphql-yoga");
const bodyParser = require("body-parser");
const config = require("./config");
const mongoose = require("mongoose");
const chalk = require("chalk");

const GraphQLResolvers = require("./src/api/resolvers/index");

const app = express();
app.use(bodyParser.json());

const server = new GraphQLServer({
  typeDefs: "./src/api/schema/schema.graphql",
  resolvers: GraphQLResolvers
});


mongoURI = `mongodb+srv://${config.development.database.user}:${
  config.development.database.password
}@waitless-ulvvr.mongodb.net/${
  config.development.database.db
}?retryWrites=true`;

const port = 4000;

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(
    server.start(() =>
      console.log(
        chalk.green.bold.inverse("SUCCESS") +
          `\nRunning a GraphQL API server at localhost:${port}`
      )
    )
  )
  .catch(err => console.log(chalk.red.bold.inverse("ERROR"), err));
