import React from "react";
import {
  Grid,
  makeStyles,
  Container,
  Typography,
  Card
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
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
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

const Home = props => {
  const classes = useStyles();
  return (
    <main>
      <div className={classes.heroContent}>
        <Container maxWidth="lg">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Home Page
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Headline text.
          </Typography>

          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Card className={classes.heroCards}>card 1</Card>
              </Grid>

              <Grid item>
                <Card className={classes.heroCards}>card 2</Card>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </main>
  );
};

export default Home;
