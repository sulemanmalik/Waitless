const options = { discriminatorKey: "kind" };
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");

const patientSchema = new Schema(
  {
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    dateOfBirth: {
      type: Date,
      required: true
    },
    medicareNumber: {
      type: String,
      required: true
    },
    insuranceNumber: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    }
  },
  options
);

module.exports = mongoose.model("Patient", patientSchema);
