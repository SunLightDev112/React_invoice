import React from "react";
import { Grid, Typography, TextField, Button,  } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Check } from "@material-ui/icons";

const useStyles = makeStyles({
  date: {
    "& .MuiInputBase-root": {
      width: "150px",
    },
  },
  button: {
    width: "40px",
    minWidth: "40px",
    margin: "0px 5px",
  },
});

const DateBox = () => {
  const classes = useStyles();
  return (
    <Grid>
      <Grid container alignItems="center" lg={12} style={{height:'42px'}}>
        <Grid lg={6}>
          <Typography>Date-In From</Typography>
        </Grid>
        <Grid lg={6}>
          <Typography>Date-In To</Typography>
        </Grid>
      </Grid>
      <Grid container alignItems="center" lg={12}>
        <Grid lg={6}>
          <TextField
            id="date"
            type="date"
            defaultValaue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
            className={classes.date}
          />
          <Button size="small" variant="outlined" className={classes.button}>
            <Check />
          </Button>
        </Grid>
        <Grid lg={6}>
          <TextField
            id="date"
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
            className={classes.date}
          />
          <Button size="small" variant="outlined" className={classes.button}>
            <Check />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DateBox;
