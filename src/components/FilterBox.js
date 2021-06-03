import React from "react";
import {
  Grid,
  Typography,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Save, Clear } from "@material-ui/icons";

const useStyles = makeStyles({
  radioGroup: {
    display: "flex",
    flexBasis: "row",
  },
  select: {
    "& .MuiOutlinedInput-root": {
      width: "228px",
      height: "32px",
    },
  },
  button: {
    width: "40px",
    minWidth: "40px",
  },
});

const FilterBox = () => {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const [select, setSelect] = React.useState(0);
  const handleSelect = (e) => {
    setSelect(e.target.value);
  };

  return (
    <Grid>
      <Grid container alignItems="center">
        <Grid lg>
          <Typography>Filter</Typography>
        </Grid>
        <Grid lg={8}>
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                value="include"
                control={<Radio />}
                label="Include"
              />
              <FormControlLabel
                value="exclude"
                control={<Radio />}
                label="Exclude"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container alignItem="center">
        <Grid item>
          <FormControl
            variant="outlined"
            size="small"
            className={classes.select}
          >
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={select}
              onChange={handleSelect}
            >
              <MenuItem value={0}>Ten</MenuItem>
              <MenuItem value={1}>Twenty</MenuItem>
              <MenuItem value={2}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <Button size="small" variant="outlined" className={classes.button}>
            <Save />
          </Button>
        </Grid>
        <Grid item>
          <Button size="small" variant="outlined" className={classes.button}>
            <Clear />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FilterBox;
