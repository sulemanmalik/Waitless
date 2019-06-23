import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

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
    backgroundColor: "transparent",
    boxShadow: "none"
  },
  links: {
    color: "#34495e",
    textDecoration: "none",
    marginRight: 80,
    "&:hover": {
      color: "#16a085"
    }
  }
}));

const MainNavigation = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          />
          <Typography variant="h6" className={classes.title}>
            Waitless
          </Typography>

          <Typography>
            <NavLink to="/appointments" className={classes.links}>
              Appointments
            </NavLink>
          </Typography>
          <Typography>
            <NavLink to="/bookings" className={classes.links}>
              Bookings
            </NavLink>
          </Typography>
        
          <Typography>
            <NavLink to="/" className={classes.links}>
              Login
            </NavLink>
          </Typography>
          <Typography>
            <NavLink to="/signup" className={classes.links}>
              Signup
            </NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );

  //   <header>
  //     <div className="main-navigation__logo">
  //       <h1>Waitless</h1>
  //     </div>

  //     <nav className="main-navigation__item">
  //       <ul>
  //         <li>
  //           <NavLink to="/appointments">Appointments</NavLink>
  //         </li>
  //         <li>
  //           <NavLink to="/bookings">Bookings</NavLink>
  //         </li>
  //         <li>
  //           <NavLink to="/auth">Auth</NavLink>
  //         </li>
  //       </ul>
  //     </nav>
  //   </header>
};

export default MainNavigation;
