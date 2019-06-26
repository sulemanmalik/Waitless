import React from "react";
import { Grid} from "@material-ui/core";


// import img from "../images/wbg.jpg";

const Home = props => {
  return (
    <Grid container justify="center" direction="row">
      {/* <img
        src={img}
        alt="bg"
        style={{
          position: "absolute", 
          height: "100%",
          width: "100%",
          maxHeight: "100%",
          margin: 0,
          padding: 0,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          zIndex: "-1"
        }}
      /> */}

      <h1 style={{paddingTop: "200px"}}> Home page</h1>

      
    </Grid>
  );
};

export default Home;
