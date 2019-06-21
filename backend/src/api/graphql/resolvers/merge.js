const Patient = require("../../../models/Patient");
const Appointment = require("../../../models/Appointment");

const dateToString = date => new Date(date).toISOString();

const patientBind = async patientId => {
  try {
    const patient = await Patient.findById(patientId);
    console.log(patient);
    return {
      ...patient._doc,
      _id: patient.id,
      createdAppointments: appointments.bind(
        this,
        patient._doc.createdAppointments
      )
    };
  } catch (err) {
    throw err;
  }
};

const singleAppointment = async appointmentId => {
  try {
    const appointment = await Appointment.findById(appointmentId);
    return transformAppointment(appointment);
  } catch (err) {
    throw err;
  }
};

const appointments = async appointmentIds => {
  try {
    const appointments = await Appointment.find({
      _id: { $in: appointmentIds }
    });

    return appointments.map(appointment => {
      return transformAppointment(appointment);
    });
  } catch (err) {
    throw err;
  }
};

const transformAppointment = appointment => {
  return {
    ...appointment._doc,
    _id: appointment.id,
    date: dateToString(appointment._doc.date),
    creator: patientBind.bind(this, appointment.creator)
  };
};

const transformBooking = booking => {
  return {
    ...booking._doc,
    _id: booking.id,
    patient: patientBind.bind(this, booking._doc.patient),
    appointment: singleAppointment.bind(this, booking._doc.appointment),
    createdAt: dateToString(booking._doc.createdAt),
    updatedAt: dateToString(booking._doc.updatedAt)
  };
};

exports.patientBind = patientBind;
exports.transformBooking = transformBooking;
exports.transformAppointment = transformAppointment;
