const Patient = require("../../../models/Patient");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  Query: {
    patients: async args => {
      const patients = await Patient.find();
      return patients;
    },
    login: async (parent, { email, password }) => {
      const patient = await Patient.findOne({ email: email });
      if (!patient) {
        throw new Error("Patient does not exist");
      }

      const isEqual = await bcrypt.compare(password, patient.password);
      if (!isEqual) {
        throw new Error("Password is incorrect");
      }

      const token = jwt.sign(
        { patientId: patient.id, email: patient.email },
        "privatekey",
        { expiresIn: "1h" }
      );

      return {
        patientId: patient.id,
        token: token,
        tokenExpiration: 1
      }
    }
  },
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
