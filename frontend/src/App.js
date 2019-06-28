import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

//Pages
import LoginPage from "./pages/Login";
import AppointmentsPage from "./pages/Appointments";
import BookingsPage from "./pages/Bookings";
import SignupPage from "./pages/Signup";
import HomePage from "./pages/Home";
import DashboardPage from "./pages/Dashboard"

//Components
// import MainNavigation from "./components/Navigation/MainNavigation";

//Shared
import Navigation from "./Shared/Navigation/Navigation"

//Context
import AuthContext from "./Shared/Authentication/AuthContext"

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
          <Navigation />
          <Switch>
            {!token && <Redirect from="/" to="/home" exact />}
            {!token && <Redirect from="/dashboard" to="/home" exact />}
            {!token && <Redirect from="/bookings" to="/home" exact />}
            {!token && <Redirect from="/appointments" to="/home" exact />}
            {!token && <Route path="/home" component={HomePage} />}
            {!token && <Route path="/login" component={LoginPage} />}
            {!token && <Route path="/signup" component={SignupPage} />}

            {token && <Redirect from="/" to="/dashboard" exact/>}
            {token && <Redirect from="/login" to="/dashboard"/>}
            {token && <Redirect from="/home" to="/dashboard"/>}
            {token && <Route path="/bookings" component={BookingsPage} />}
            {token && <Route path="/appointments" component={AppointmentsPage} />}
            {token && <Route path="/dashboard" component={DashboardPage}/>}
          </Switch>
        </AuthContext.Provider>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
