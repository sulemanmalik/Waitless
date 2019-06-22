const Booking = require("../../../models/Booking");
const Appointment = require("../../../models/Appointment");
const {
  transformAppointment,
  transformBooking,
  patientBind
} = require("./merge");

module.exports = {
  Query: {
    bookings: async (parent, args, req) => {
      if (!req.isAuth) {
        throw new Error("Unauthenticated!");
      }
      try {
        const bookings = await Booking.find();
        return bookings.map(booking => {
          return transformBooking(booking);
        });
      } catch (err) {
        throw err;
      }
    }
  },
  Mutation: {
    bookAppointment: async (parent, args, req) => {
      if (!req.isAuth) {
        throw new Error("Unauthenticated!");
      }
      const fetchedAppointment = await Appointment.findOne({
        _id: args.appointmentId
      });
      const booking = new Booking({
        patient: req.patientId,
        appointment: fetchedAppointment
      });
      const result = await booking.save();
      return transformBooking(result);
    },

    cancelBooking: async (parent, args, req) => {
      if (!req.isAuth) {
        throw new Error("Unauthenticated!");
      }
      try {
        const booking = await Booking.findById(args.bookingId).populate(
          "appointment"
        );
        const appointment = transformAppointment(booking.appointment);
        await Booking.deleteOne({ _id: args.bookingId });
        return appointment;
      } catch (err) {
        throw err;
      }
    }
  }
};
