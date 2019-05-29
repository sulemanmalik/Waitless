module.exports = `
type Appointment {
  _id: ID!
  title: String!
  date: String!
  time: String!
  location: String!
  doctor: String!
  visitPurpose: String!
  aptType: String!
  status: String!
}

input AppointmentInput {
  title: String!
  date: String!
  time: String!
  location: String!
  doctor: String!
  visitPurpose: String!
  aptType: String!
  status: String!
}

type Query {
  appointments: [Appointment!]!
}

type Mutation {
  createAppointment(appointmentInput: AppointmentInput): Appointment
}
`