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
    color: "black",
    fontSize: "2rem"
  },
  navbar: {
    backgroundColor: "white"
  },
  links: {
    color: "#34495e",
    textDecoration: "none",
    marginRight: 80,
    "&:hover": {
      color: "#16a085"
    }
  },
  signup: {
    color: "#34495e",
    textDecoration: "white",
    marginRight: 80,
    border: "1px solid #16a085",
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#16a085",
    "&:hover": {
      color: "white",
      boxShadow: "20px",
      transition: "box-shadow .3s"
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
            <AppBar position="fixed" className={classes.navbar}>
              <Toolbar>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="Menu"
                />
                <Typography variant="h6" className={classes.title}>
                  <NavLink to="/" className={classes.links}>
                    Waitless
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
                    <NavLink to="/login" className={classes.links}>
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
