const Booking = require("../../../models/Booking");
const Appointment = require("../../../models/Appointment")
const { transformAppointment, transformBooking } = require("./merge");

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
        console.log(args)
        // if(!req.isAuth) {
        //     throw new Error('Unauthenticated')
        //   }
        const fetchedAppointment = await Appointment.findOne({ _id: args.appointmentId });
        const booking = new Booking({
          patient: '5cfc5aed74d2a149aed655f7',
          appointment: fetchedAppointment//'5d0c58cdc7fbf677a5b504e7'
        });
        const result = await booking.save();
        return transformBooking(result);
      }
  }
};
