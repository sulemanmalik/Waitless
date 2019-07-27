import React, { useContext } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import AuthContext from "../Shared/Authentication/AuthContext";

const loginQuery = gql`
  {
    login(email: email, password: password, authcontext: authcontext) {
      patientId
      token
      tokenExpiration
    }
  }
`;

const Login = props => {
  const auth = useContext(AuthContext);

  return (
    <AuthContext.Consumer>
      {context => (
        <Query query={loginQuery}>

          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            auth.login(
              data.login.token,
              data.login.patientid,
              data.login.tokenExpiration
            )
            return (
              <h1 style={{paddingTop: "200px"}}>{data}</h1>
            )
          }}

        </Query>

      )}
    </AuthContext.Consumer>
  );
};

export default Login;
