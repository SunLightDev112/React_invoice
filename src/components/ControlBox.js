import React from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Save, Clear } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {},
  select: {
    "& .MuiOutlinedInput-root": {
      width: "220px",
      height: "32px",
    },
  },
  button: {
    minWidth: "40px",
  },
  list: {
    border: "1px solid lightGray",
    width: "305px",
    height: "300px",
    margin: "5px 0px",
    borderRadius: "5px",
    overflow: "auto",
    "& .MuiListItem-button": {
      height: "30px",
    },
  },
  input1: {
    "& .MuiInputLabel-outlined": {
      transform: "translate(7px, 8px) scale(1)",
    },
    "& input": {
      padding: "5px",
    },
    "& .MuiInputBase-root": {
      height: "32px",
      width: "50px",
    },
  },
  input2: {
    "& .MuiInputLabel-outlined": {
      transform: "translate(7px, 8px) scale(1)",
    },
    "& .MuiInputBase-root": {
      height: "32px",
      width: "168px",
    },
  },
});

const ControlBox = () => {
  const classes = useStyles();
  const [select, setSelect] = React.useState(0);

  const [checked, setChecked] = React.useState([0]);
  const handleSelect = (e) => {
    setSelect(e.target.value);
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <>
      <Grid container alignItem="center">
        <Grid item>
          <FormControl
            variant="outlined"
            size="small"
            className={classes.select}
          >
            <InputLabel id="demo-simple-select-outlined-label">
              Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={select}
              onChange={handleSelect}
              label="Category"
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
      <Grid style={{ marginTop: "10px" }}>
        <Typography
          variant="subtitle2"
          component="subtitle1"
          style={{ margin: "5px" }}
        >
          Category
        </Typography>
        <List className={classes.list}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((value) => {
            const labelId = `checkbox-list-label-${value}`;
            return (
              <ListItem
                key={value}
                size="small"
                variant="outlined"
                dense
                button
                onClick={handleToggle(value)}
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
              </ListItem>
            );
          })}
        </List>
      </Grid>
      <Grid>
        <TextField
          id="outlined-basic"
          placeholder="index"
          variant="outlined"
          className={classes.input1}
        />
        <TextField
          id="outlined-basic"
          placeholder="category"
          variant="outlined"
          className={classes.input2}
        />
        <Button size="small" variant="outlined" className={classes.button}>
          <Save />
        </Button>
        <Button size="small" variant="outlined" className={classes.button}>
          <Clear />
        </Button>
      </Grid>
    </>
  );
};

export default ControlBox;
