import React, { useEffect } from "react";
import { Typewriter } from "react-typewriting-effect";
import "react-typewriting-effect/dist/index.css";
import Grid from "@mui/material/Grid";
import Flash from "react-reveal/Flash";

const Welcome = (props) => {  
  return (
    <Grid
    item
    container
    direction="column"
    display="flex"
    justify="center"
  >
      <div>
        <h1>
          <Typewriter string="Play Perfect" delay={200} />
        </h1>
      </div>
      <div>
        <Flash duration={3000} forever>
          <h2>Press Start</h2>
        </Flash>
      </div>
      </Grid>
  );
};

export default Welcome;
