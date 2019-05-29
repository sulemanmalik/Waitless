const appointmentResolver = require("./appointments");
const patientResolver = require("./patients");

const rootResolver = {
  Query: {
    ...appointmentResolver.Query,
    ...patientResolver.Query
  },
  Mutation: {
    ...appointmentResolver.Mutation,
    ...patientResolver.Mutation
  }
};

module.exports = rootResolver;
