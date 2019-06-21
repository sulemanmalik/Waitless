const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  doctor: {
    type: String,
    required: true
  },
  visitPurpose: {
    type: String,
    required: true
  },
  aptType: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "Patient" 
  }
});

module.exports = mongoose.model("Appointment", appointmentSchema);
