const Patient = require("../../../models/Patient");
const bcrypt = require("bcryptjs");

module.exports = {
  Query: {},
  Mutation: {
    createPatient: async (parent, args) => {
      try {
        const existingPatient = await Patient.findOne({
          email: args.patientInput.email
        });
        if (existingPatient) {
          throw new Error("Patient exists already");
        }

        const hashedPassword = await bcrypt.hash(
          args.patientInput.password,
          12
        );

        const patient = new Patient({
          email: args.patientInput.email,
          password: hashedPassword,
          firstName: args.patientInput.firstName,
          lastName: args.patientInput.lastName,
          dateOfBirth: args.patientInput.dateOfBirth,
          medicareNumber: args.patientInput.medicareNumber,
          insuranceNumber: args.patientInput.insuranceNumber,
          address: args.patientInput.address,
          phoneNumber: args.patientInput.phoneNumber
        });

        const result = await patient.save();

        return { ...result._doc, password: null };
      } catch (err) {
        throw err;
      }
    }
  }
};
