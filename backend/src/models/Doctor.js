const options = { discriminatorKey: "kind" };
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Doctor = require("./Doctor");

const doctorSchema = new Schema(
    {
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        jobTitle: { // ex: Pediatrician, OBGYN, Dermatogolist
            type: String,
            required: true
        },
        scheduledAppointments: [
            {
                type: Schema.Types.ObjectId,
                ref: "Appointment"
            }
        ],
    },
    options
);

module.exports = mongoose.model("Doctor", doctorSchema);
