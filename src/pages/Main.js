import React from "react";
import { Grid, Button, ButtonGroup, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ControlBox from "../components/ControlBox";
import DateBox from "../components/DateBox";
import SearchBox from "../components/SearchBox";
import FilterBox from "../components/FilterBox";
import ReportBox from '../components/ReportBox';
import InvoiceBox from '../components/InvoiceBox';
import ProductBox from '../components/ProductBox';

const useStyles = makeStyles({
  root: {
    padding: "10px",
  },
  group1: {
    float: "left",
  },
  group2: {
    float: "right",
  },
  second: {
    padding: "10px 0px",
  },
  third: {
    padding: "10px 0px",
  },
  
});

const Main = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid>
        <ButtonGroup
          size="small"
          aria-label="small outlined button group"
          className={classes.group1}
        >
          <Button>Report</Button>
          <Button>Invoice</Button>
          <Button>Open</Button>
          <Button>Favorite</Button>
          <Button>Recents</Button>
          <Button>Order Tracker</Button>
          <Button>Calender</Button>
          <Button>Catalog</Button>
          <Button>Distributor</Button>
          <Button>Shipping</Button>
          <Button>Payment</Button>
        </ButtonGroup>
        <ButtonGroup
          size="small"
          aria-label="small outlined button group"
          className={classes.group2}
        >
          <Button>Users</Button>
          <Button>Sign-Out</Button>
        </ButtonGroup>
      </Grid>
      <Grid container className={classes.second} spacing={1}>
        <Grid item lg>
          <ControlBox />
        </Grid>
        <Grid item lg>
          <ControlBox />
        </Grid>
        <Grid item lg>
          <ControlBox />
        </Grid>
        <Grid item lg>
          <ControlBox />
        </Grid>
      </Grid>
      <Grid container className={classes.third} spacing={1}>
        <Grid item lg={4}>
          <DateBox />
        </Grid>
        <Grid item lg={5}>
          <SearchBox />
        </Grid>
        <Grid item lg={3}>
          <FilterBox />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item container lg={9}>
          <Grid item lg={12}>
            <ReportBox />
          </Grid>
          <Grid item lg={12}>
              <ProductBox />
          </Grid>
        </Grid>
        <Grid item lg={3}>
          <InvoiceBox />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;
