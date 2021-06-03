import React from "react";
import {
  Grid,
  Typography,
  ButtonGroup,
  Button,
  TextareaAutosize,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginTop: "10px",
  },
  textarea: {
    width: "100%",
  },
});

const ReportBox = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <Grid item container alignItems="center" spacing={2}>
        <Grid item>
          <Typography>Report </Typography>
        </Grid>
        <Grid item>
          <ButtonGroup
            size="small"
            aria-label="small outlined button group"
            className={classes.group1}
          >
            <Button>Default View</Button>
            <Button>Print</Button>
            <Button>Email</Button>
            <Button>Save Zip</Button>
            <Button>Load Invoice</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Grid item lg={12}>
        <TextareaAutosize
          rowsMin={20}
          aria-label="maximum height"
          className={classes.textarea}
        />
      </Grid>
    </Grid>
  );
};

export default ReportBox;
