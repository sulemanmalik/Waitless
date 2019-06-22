const Appointment = require("../../../models/Appointment");
const Patient = require("../../../models/Patient");
const { transformAppointment, patientBind } = require("./merge");

module.exports = {
  Query: {
    appointments: async () => {
      try {
        const appointments = await Appointment.find();

        return appointments.map(appointment => {
          return transformAppointment(appointment);
        });
      } catch (err) {
        throw err;
      }
    }
  },
  Mutation: {
    createAppointment: async (parent, args, req) => {
      if(!req.isAuth) {
        throw new Error("Unauthenticated!")
      }
      const appointment = new Appointment({
        title: args.appointmentInput.title,
        date: new Date(args.appointmentInput.date),
        time: args.appointmentInput.time,
        location: args.appointmentInput.location,
        doctor: args.appointmentInput.doctor,
        visitPurpose: args.appointmentInput.visitPurpose,
        aptType: args.appointmentInput.aptType,
        status: args.appointmentInput.status,
        creator: req.patientId
      });

      let createdAppointment;

      try {
        const result = await appointment.save();
        createdAppointment = {
          ...result._doc,
          _id: appointment.id,
          creator: patientBind.bind(this, result._doc.creator)
        };
        const patient = await Patient.findById(req.patientId);

        if (!patient) {
          throw new Error("Patient not found");
        }

        patient.createdAppointments.push(appointment);

        await patient.save();

        return createdAppointment;
      } catch (err) {
        throw err;
      }
    }
  }
};
