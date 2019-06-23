import React from "react";
import "./App.css";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

//Pages
import LoginPage from "./pages/Login";
import AppointmentsPage from "./pages/Appointments";
import BookingsPage from "./pages/Bookings";
import SignupPage  from './pages/Signup'

//Components
import MainNavigation from "./components/Navigation/MainNavigation";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <MainNavigation />
        <Switch>
          <Redirect from="/" to="/login" exact />
          <Route path="/login" component={LoginPage} />
          <Route path="/bookings" component={BookingsPage} />
          <Route path="/appointments" component={AppointmentsPage} />
          <Route path="/signup" component={SignupPage} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
