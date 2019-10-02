const appointmentResolver = require("./appointments");
const patientResolver = require("./patients");
const bookingResolver = require("./bookings");
const doctorResolver = require("./doctors");

const rootResolver = {
  Query: {
    ...appointmentResolver.Query,
    ...patientResolver.Query,
    ...bookingResolver.Query,
    ...doctorResolver.Query,
  },
  Mutation: {
    ...appointmentResolver.Mutation,
    ...patientResolver.Mutation,
    ...bookingResolver.Mutation,
    ...doctorResolver.Mutation,
  }
};

module.exports = rootResolver;
