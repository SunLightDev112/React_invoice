import React from "react";
import { Grid, Typography, TextareaAutosize, Button,  } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    textarea:{
        width:'100%',
    }
});

const InvoiceBox = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
        <Grid item lg={12}>
            <Typography style={{float:'left'}}>Load Invoice</Typography>
            <Button size="small" variant="outlined" style={{float:'right'}}>Open</Button>
        </Grid>
        <Grid item lg={12}>
        <TextareaAutosize
          rowsMin={33}
          aria-label="maximum height"
          className={classes.textarea}
        />
        </Grid>
    </Grid>
  );
};

export default InvoiceBox;
