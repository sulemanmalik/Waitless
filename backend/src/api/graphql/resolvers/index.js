const appointmentResolver = require("./appointments");
const patientResolver = require("./patients");
const bookingResolver = require("./bookings");

const rootResolver = {
  Query: {
    ...appointmentResolver.Query,
    ...patientResolver.Query,
    ...bookingResolver.Query
  },
  Mutation: {
    ...appointmentResolver.Mutation,
    ...patientResolver.Mutation,
    ...bookingResolver.Mutation
  }
};

module.exports = rootResolver;
