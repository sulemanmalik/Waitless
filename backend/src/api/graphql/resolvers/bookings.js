// const Appointment = require("../../../models/Appointment");
// const Booking = require("../../../models/Booking");

// const resolvers = {
//   Query: {},
//   Mutation: {
//     bookAppointment: async (parent, args, req) => {
//       const fetchedAppointment = await Appointment.find({
//         _id: args.appointmentId
//       });
//       const booking = new Booking({
//         patient: '5ced56715677d8bbad18f697', //req.userId,
//         appoinment: fetchedAppointment
//       });

//       console.log(booking)

//       const result = await booking.save();
//       return result
//     }
//   }
// };

// module.exports = resolvers;

// // const Booking = require("../../models/Booking");

// // const resolvers = {
// //   Query: {},
// //   Mutation: {}
// // };

// // module.exports = resolvers;
