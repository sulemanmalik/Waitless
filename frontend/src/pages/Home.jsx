import React from "react";
import { Grid, makeStyles, Typography, Card, Button } from "@material-ui/core";

import img from "../assets/doc.png";
// import bg from "../assets/bg.jpg";

const useStyles = makeStyles(theme => ({
  hero: {
    background: "transparent",
    margin: theme.spacing(8)
  },
  heroBook: {
    marginLeft: theme.spacing(8)
  },
  heroImage: {
    margin: theme.spacing(8)
  },
  heroText: {
    color:"grey"
  },
  heroTitle: {
    color: "black"
  },
  icon: {
    marginRight: theme.spacing(2)
  },
  heroCards: {
    padding: "10rem 8rem",
    borderRadius: "30px"
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "20em",
    width: "20vw",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);"
  },
  cardMedia: {
    display: "flex",
    direction: "row",
    justify: "center"
  },
  cardContent: {
    flexGrow: 1
  },

  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "auto",
    display: "block"
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  bookButton: {
    backgroundColor: "beige",
    padding: "10px 30px 10px 30px",
    borderRadius: "30px",
    '&:hover': {
      backgroundColor: "pink"
    }
  }
}));

const Home = props => {
  const classes = useStyles();
  return (
       
       <Grid>
        {/* main  hero */}
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{
            minHeight: "100vh",
            backgroundColor: "transparent"
          }}
        >
          <Grid
            container
            direction="row"
            wrap="nowrap"
            alignItems="center"
            justify="space-between"
            style={{
              backgroundColor: "transparent",
              width: "100vw"
            }}
          >
            <Grid
              container
              direction="column"
              alignItems="center"
              justify="center"
            >
              <Grid item className={classes.hero}>
              <Typography variant="h1" className={classes.heroTitle}>
                Waitless
                </Typography>
                <Typography variant="h4" className={classes.heroText}>
                  built for doctors made for patients
                </Typography>
              </Grid>

              {/* <Grid item xs={4} className={classes.heroBook}>
              <Card style={{ padding: 20, borderRadius: "20px" }}>
                <TextField
                  fullWidth="true"
                  label="search specialties"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
              </Card>
            </Grid> */}
            </Grid>

            <Grid item className={classes.heroImage}>
              <img src={img} alt="img" style={{ width: "800px" }} />
            </Grid>
          </Grid>
        </Grid>

        {/* bookcard */}
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{
            height: "50vh",
            backgroundImage: "",
            backgroundColor:" Pink"
          }}
        >
              <Card
                className={classes.card}
                style={{ padding: 4, height: "10em", width: "90em" }}
              >
                <Grid container direction="row" justify="center" style={{backgroundColor: "yellow", height:"100%"}}>

                    <Button className={classes.bookButton}>Book</Button>

                </Grid>

              </Card>



        </Grid>
      </Grid>

  );
};

export default Home;
