const Doctor = require("../../../models/Doctor");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
    Query: {
        doctors: async args => {
            const doctors = await Doctor.find();
            return doctors;
        },
        login: async (parent, { email, password }) => {
            const doctor = await Doctor.findOne({ email: email });
            if (!doctor) {
                throw new Error("Doctor does not exist");
            }

            const isEqual = await bcrypt.compare(password, doctor.password);
            if (!isEqual) {
                throw new Error("Password is incorrect");
            }

            const token = jwt.sign(
                { doctorId: doctor.id, email: doctor.email },
                "privatekey",
                { expiresIn: "1h" }
            );

            return {
                doctorId: doctor.id,
                token: token,
                tokenExpiration: 1
            }
        }
    },
    Mutation: {
        createDoctor: async (parent, args) => {
            try {
                const existingDoctor = await Doctor.findOne({
                    email: args.doctorInput.email
                });

                if (existingDoctor) {
                    throw new Error("Doctor exists already");
                }

                const hashedPassword = await bcrypt.hash(
                    args.doctorInput.password,
                    12
                );

                const doctor = new Doctor({
                    email: args.doctorInput.email,
                    password: hashedPassword,
                    firstName: args.doctorInput.firstName,
                    lastName: args.doctorInput.lastName,
                    jobTitle: args.doctorInput.jobTitle,
                });

                const result = await doctor.save();

                return { ...result._doc, password: null };
            } catch (err) {
                throw err;
            }
        }
    }
};
