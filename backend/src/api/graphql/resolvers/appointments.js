const Appointment = require("../../../models/Appointment");
const Patient = require('../../../models/Patient');
const { transformAppointment } = require('./merge')

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
    createAppointment: async (parent, args) => {
      const appointment = new Appointment({
        title: args.appointmentInput.title,
        date: new Date(args.appointmentInput.date),
        time: args.appointmentInput.time,
        location: args.appointmentInput.location,
        doctor: args.appointmentInput.doctor,
        visitPurpose: args.appointmentInput.visitPurpose,
        aptType: args.appointmentInput.aptType,
        status: args.appointmentInput.status,
        creator: '5d0d5925ac45147a3d734027'
      });

      let createdAppointment;

      // const result = await appointment.save();

      // return { ...result._doc, _id: appointment.id };

        return appointment
          .save()
          .then(result => {
            createdAppointment = { ...result._doc, _id: appointment.id };
            return Patient.findById('5d0d5925ac45147a3d734027')
          })
          .then(patient => {
            if(!patient) {
              throw new Error("Patient not found")
            }

            patient.createdAppointments.push(appointment)

            return patient.save();
          })
          .then(result => {

            return createdAppointment;


          })

          .catch(err => {
            throw err;
          });
      }
    }
  
};

