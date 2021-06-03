import React from "react";
import { Grid, Typography, TextareaAutosize, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  textarea: {
    width: "100%",
  },
});

const ProductBox = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <Grid item lg={12}>
        <Typography>Load Products</Typography>
      </Grid>
      <Grid item lg={12}>
        <TextareaAutosize
          rowsMin={10}
          aria-label="maximum height"
          className={classes.textarea}
        />
      </Grid>
    </Grid>
  );
};

export default ProductBox;
