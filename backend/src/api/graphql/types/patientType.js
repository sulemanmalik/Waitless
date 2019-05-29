module.exports = `
type Patient {
  _id: ID!
  email: String!
  password: String
  firstName: String!
  lastName: String!
  dateOfBirth: String!
  medicareNumber: String!
  insuranceNumber: String!
  address: String!
  phoneNumber: String!
}

input PatientInput {
  email: String!
  password: String
  firstName: String!
  lastName: String!
  dateOfBirth: String!
  medicareNumber: String!
  insuranceNumber: String!
  address: String!
  phoneNumber: String!
}

type Query {
  patients: [Patient!]!
}

type Mutation {
  createPatient(patientInput: PatientInput): Patient
}
`