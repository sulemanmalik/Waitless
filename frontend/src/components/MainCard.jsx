import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardMedia, Grid } from "@material-ui/core";

const image = require("../images/undraw_medicine_b1ol.png");

const useStyles = makeStyles(theme => ({
  root: {
    color: "#2ecc71",
    padding: "12rem 10rem 12rem 10rem",
    borderRadius: "20px"
  }
}));

const MainCard = props => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia>
        
      </CardMedia>
    </Card>
  );
};

export default MainCard;
