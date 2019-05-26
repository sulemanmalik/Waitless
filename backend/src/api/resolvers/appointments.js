const Appointment = require("../../models/Appointment");

const resolvers = {
  Query: {
    appointments: async () => {
      try {
        const appointments = await Appointment.find();
        return appointments.map(appointment => {
          return { ...appointment._doc, _id: appointment.id };
        });
      } catch (err) {
        throw err;
      }
    }
  },
  Mutation: {
    createAppointment: (parent, args) => {
      const appointment = new Appointment({
        title: args.appointmentInput.title,
        date: new Date(args.appointmentInput.date),
        time: args.appointmentInput.time,
        location: args.appointmentInput.location,
        doctor: args.appointmentInput.doctor,
        visitPurpose: args.appointmentInput.visitPurpose,
        aptType: args.appointmentInput.aptType,
        status: args.appointmentInput.status
      });

      return appointment
        .save()
        .then(result => {
          console.log(result);
          return { ...result._doc, _id: appointment.id };
        })
        .catch(err => {
          throw err;
        });
    }
  }
};

module.exports = resolvers;
