import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

//Pages
import LoginPage from "./pages/Login";
import AppointmentsPage from "./pages/Appointments";
import BookingsPage from "./pages/Bookings";
import SignupPage from "./pages/Signup";
import HomePage from "./pages/Home";

//Components
import MainNavigation from "./components/Navigation/MainNavigation";

//Context
import AuthContext from "./context/auth-context";

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
  return (
    <BrowserRouter>
      <React.Fragment>
        <AuthContext.Provider
          value={{
            token: token,
            patientId: patientId,
            login: login,
            logout: logout
          }}
        >
          <MainNavigation />
          <Switch>
            <Redirect from="/" to="/home" exact />
            <Route path="/home" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/bookings" component={BookingsPage} />
            <Route path="/appointments" component={AppointmentsPage} />
            <Route path="/signup" component={SignupPage} />
          </Switch>
        </AuthContext.Provider>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
