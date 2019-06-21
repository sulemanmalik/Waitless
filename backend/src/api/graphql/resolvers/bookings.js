const Booking = require("../../../models/Booking");
const Appointment = require("../../../models/Appointment");
const {
  transformAppointment,
  transformBooking,
  patientBind
} = require("./merge");

module.exports = {
  Query: {
    bookings: async (args, req) => {
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
    bookAppointment: async (parent, args) => {
      console.log(args);
      // if(!req.isAuth) {
      //     throw new Error('Unauthenticated')
      //   }
      const fetchedAppointment = await Appointment.findOne({
        _id: args.appointmentId
      });
      const booking = new Booking({
        patient: "5d0d5925ac45147a3d734027",
        appointment: fetchedAppointment //'5d0c58cdc7fbf677a5b504e7'
      });
      const result = await booking.save();
      return transformBooking(result);
    },

    cancelBooking: async (parent, args) => {
      try {
        const booking = await Booking.findById(args.bookingId).populate(
          "appointment"
        );
        const appointment = {
          ...booking.appointment._doc,
          _id: booking.appointment.id,
          creator: patientBind.bind(this, booking.appointment._doc.creator)
        };
        await Booking.deleteOne({ _id: args.bookingId });
        return appointment;
      } catch (err) {
        throw err;
      }
    }
  }
};
