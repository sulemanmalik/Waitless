const loginAPI = {
  LOGIN: (email, password, authcontext) => {
    let requestBody = {
      query: `
        query{
            login(email: "${email}", password: "${password}") {
                patientId
                token
                tokenExpiration
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
        if (resData.data.login.token) {
          authcontext.login(
            resData.data.login.token,
            resData.data.login.patientId,
            resData.data.login.tokenExpiration
          );
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};

export default loginAPI;
