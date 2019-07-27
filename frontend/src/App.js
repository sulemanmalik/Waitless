import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

//Features
import LoginPage from "./Features/Authentication/Login";
import AppointmentsPage from "./Features/Appointments/Appointments";
import BookingsPage from "./Features/Bookings/Bookings";
import SignupPage from "./Features/Authentication/Signup";
import DashboardPage from "./Features/Dashboard/Dashboard";

//Pages
import HomePage from "./pages/Home";

//Shared
import Navigation from "./Shared/Navigation/Navigation";
import AuthContext from "./Shared/Authentication/AuthContext";

import LoginApollo from "./api/loginApollo"

function App() {
  const [token, setToken] = useState("");
  const [patientId, setPatientId] = useState("");

  const login = (token, patientId, tokenExpiration) => {
    setToken(token);
    setPatientId(patientId);
  };

  const logout = () => {
    setToken(null);
    setPatientId(null);
  };

  const client = new ApolloClient({
    uri: "localhost:4000",
    fetchOptions: {
      mode: 'no-cors',
    },
  });

  return (
    <BrowserRouter>
      <React.Fragment>
        <ApolloProvider client={client}>
          <AuthContext.Provider
            value={{
              token: token,
              patientId: patientId,
              login: login,
              logout: logout
            }}
          >
            <Navigation />
            <LoginApollo/>

            <Switch>
              {!token && <Redirect from="/" to="/home" exact />}
              {!token && <Redirect from="/dashboard" to="/home" exact />}
              {!token && <Redirect from="/bookings" to="/home" exact />}
              {!token && <Redirect from="/appointments" to="/home" exact />}
              {!token && <Route path="/home" component={HomePage} />}
              {!token && <Route path="/login" component={LoginPage} />}
              {!token && <Route path="/signup" component={SignupPage} />}

              {token && <Redirect from="/" to="/dashboard" exact />}
              {token && <Redirect from="/login" to="/dashboard" />}
              {token && <Redirect from="/home" to="/dashboard" />}
              {token && <Route path="/bookings" component={BookingsPage} />}
              {token && (
                <Route path="/appointments" component={AppointmentsPage} />
              )}
              {token && <Route path="/dashboard" component={DashboardPage} />}
            </Switch>
          </AuthContext.Provider>
        </ApolloProvider>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
