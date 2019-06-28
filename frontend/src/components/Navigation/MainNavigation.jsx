import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";


import AuthContext from "../../context/auth-context";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: "white",
    fontSize: "2rem",
    textDecoration: "none",
    fontWeight: 900,
    "&:hover": {
      color: "#16a085"
    }
  },
  navbar: {
    backgroundColor: "#2C3A47"
  },
  links: {
    color: "white",
    textDecoration: "none",
    marginRight: 80,
    fontWeight: 900,
    textTransform: "uppercase",
    "&:hover": {
      color: "#16a085",

    }
  },
  signup: {
    cursor: "pointer",
    background: "#55E6C1",
    fontSize: "18px",
    borderRadius: "30px",
    color: "#2C3A47",
    border: "2px solid #55E6C1",
    margin: "0 2em",
    padding: "0.5em 1em",
    transition: "0.1s all ease-out",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "#8fffe2",
      border: "2px solid #8fffe2",
      color: "#2C3A47"
    }
  }, 
  login: {
    cursor: "pointer",
    background: "transparent",
    fontSize: "18px",
    borderRadius: "30px",
    color: "#55E6C1",
    border: "2px solid #55E6C1",
    margin: "0 2em",
    padding: "0.5em 1em",
    transition: "0.1s all ease-out",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "#55E6C1",
      color: "white"
    }
  }
}));

const MainNavigation = props => {
  const classes = useStyles();
  const auth = useContext(AuthContext);
  return (
    <AuthContext.Consumer>
      {context => {
        return (
          <div className={classes.root}>
            <AppBar position="sticky" className={classes.navbar}>
              <Toolbar>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="Menu"
                />
                <Typography variant="h6" className={classes.title}>
                  <NavLink to="/" className={classes.title}>
                    waitless
                  </NavLink>
                </Typography>

                {context.token && (
                  <Typography>
                    <NavLink to="/appointments" className={classes.links}>
                      Appointments
                    </NavLink>
                  </Typography>
                )}

                {context.token && (
                  <Typography>
                    <NavLink to="/bookings" className={classes.links}>
                      Bookings
                    </NavLink>
                  </Typography>
                )}

                {context.token && (
                  <Typography>
                    <NavLink
                      to="/bookings"
                      className={classes.links}
                      onClick={auth.logout}
                    >
                      Logout
                    </NavLink>
                  </Typography>
                )}

                {!context.token && (
                  <Typography>
                    <NavLink to="/login" className={classes.login}>
                      Login
                    </NavLink>
                  </Typography>
                )}

                {!context.token && (
                  <Typography>
                    <NavLink to="/signup" className={classes.signup}>
                      Signup
                    </NavLink>
                  </Typography>
                )}
              </Toolbar>
            </AppBar>
          </div>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default MainNavigation;
