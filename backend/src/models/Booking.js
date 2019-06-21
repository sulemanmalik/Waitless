const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Patient = require("./Patient");
const Appointment = require("./Appointment");

const bookingSchema = new Schema(
  {
    appointment: {
      type: Schema.Types.ObjectId,
      ref: "Appointment"
    },
    patient: {
      type: Schema.Types.ObjectId,
      ref: "Patient"
    }
  },
  { timestamps: true }
);
//adding options here for timestamps

module.exports = mongoose.model("Booking", bookingSchema);
