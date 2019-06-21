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
  creator: Patient!
}


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
  createdAppointments: [Appointment!]
}

type Booking {
  _id: ID!
  appointment: Appointment!
  patient: Patient!
  createdAt: String!
  updatedAt: String!
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
  appointments: [Appointment!]!
  patients: [Patient!]!
  bookings: [Booking!]!
}

type Mutation {
  createAppointment(appointmentInput: AppointmentInput): Appointment
  createPatient(patientInput: PatientInput): Patient
  bookAppointment(appointmentId: ID!): Booking!
  cancelBooking(bookingId: ID!): Appointment!
}
`