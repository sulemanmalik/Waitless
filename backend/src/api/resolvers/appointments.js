const mockApts = [];

const resolvers = {
  Query: {
    appointments: () => mockApts
  },
  Mutation: {
    createAppointment: (parent, args) => {
      const appointment = {
        title: args.appointmentInput.title,
        date: new Date(args.appointmentInput.date),
        time: args.appointmentInput.time,
        location: args.appointmentInput.location,
        doctor: args.appointmentInput.doctor,
        visitPurpose: args.appointmentInput.visitPurpose,
        aptType: args.appointmentInput.aptType,
        status: args.appointmentInput.status
      };
      mockApts.push(appointment);
      return appointment;
    }
  }
};

module.exports = resolvers;
