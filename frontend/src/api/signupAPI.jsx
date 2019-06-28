const signupAPI = {
  SIGNUP: (
    email,
    password,
    firstName,
    lastName,
    dob,
    medicareNum,
    insuranceNum,
    address,
    phoneNum
  ) => {
    const requestBody = {
      query: `
              mutation {
                createPatient(patientInput: {
                  email: "${email}",
                  password:"${password}",
                  firstName: "${firstName}",
                  lastName:"${lastName}",
                  dateOfBirth:"${dob}",
                  medicareNumber:"${medicareNum}",
                  insuranceNumber:"${insuranceNum}",
                  address:"${address}",
                  phoneNumber:"${phoneNum}"
                }) {
                  _id
                  email
                }
              }
            `
    };

    fetch("http://localhost:4000", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("failed");
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
      })
      .catch(err => {
        console.log(err);
      });
  }
};

export default signupAPI;
