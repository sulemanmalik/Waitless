const express = require("express");
const { GraphQLServer } = require("graphql-yoga");
const bodyParser = require("body-parser");
const config = require("./config");
const mongoose = require("mongoose");
const chalk = require("chalk");
const cors = require("cors");

const isAuth = require("./src/middleware/is-auth");
const typeDefs = require("./src/api/graphql/schema");
const resolvers = require("./src/api/graphql/resolvers/index");

const app = express();

app.use(bodyParser.json());
app.use(isAuth);
app.use((req, res, next) => {
  res.setHeader("Access-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
});
app.use(cors())

const server = new GraphQLServer({
  typeDefs,
  resolvers
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
          ` - Running a GraphQL API server at localhost:${port}`
      )
    )
  )
  .catch(err => console.log(chalk.red.bold.inverse("ERROR"), err));
