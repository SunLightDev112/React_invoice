import React from "react";
import {
  Grid,
  Typography,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Save, Clear } from "@material-ui/icons";

const useStyles = makeStyles({
  select: {
    "& .MuiOutlinedInput-root": {
      width: "440px",
      height: "32px",
    },
  },
  button: {
    width: "40px",
    minWidth: "40px",
  },
  check:{
      '& .MuiTypography-root':{
          width:'182px',
      }
  }
});

const SearchBox = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const [select, setSelect] = React.useState(0);
  const handleSelect = (e) => {
    setSelect(e.target.value);
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Grid>
      <Grid container direction="row" alignItems="center">
        <Grid lg>
          <Typography>Search Term</Typography>
        </Grid>
        <Grid lg>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
              />
            }
            label="Recycled(Deleted)"
          />
        </Grid>
        <Grid lg={5}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
              />
            }
            label="Archived(Older Versions)"
            className={classes.check}
          />
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

export default SearchBox;
