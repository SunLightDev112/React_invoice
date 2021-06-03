import React from "react";
import { Grid, Button, ButtonGroup, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ControlBox from "../components/ControlBox";
import DateBox from "../components/DateBox";
import SearchBox from "../components/SearchBox";
import FilterBox from "../components/FilterBox";
import ReportBox from "../components/ReportBox";
import InvoiceBox from "../components/InvoiceBox";
import ProductBox from "../components/ProductBox";

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
    paddingTop: "20px",
  },
  third: {
    padding: "10px 0px",
  },
});

const data = {
  categories: [
    "00.Invoice",
    "01.Bill-To",
    "02.Ship-To",
    "03.Credit-Card",
    "04.Products",
    "05.Deposits",
    "06.Totals",
    "07.Instructions",
    "08.Internal-Notes",
  ],
  fields: [
    "00.Invoice-Number",
    "01.Invoice-Date-In",
    "02.Invoice-Date-Due",
    "03.Invoice-Date-Out",
    "04.Invoice-Deposit-Dates",
    "05.Invoice-Order-Status",
    "06.Bill-To-Organization-Name-Conference",
    "07.Bill-To-Organization-Address",
    "08.Bill-To-Organization-City,State,Zip",
    "09.Bill-To-Organization-Phone",
    "10.Bill-To-Organization-Fax Number",
    "11.Bill-To-Organization-01.Invoice-Date-In",
    "02.Invoice-Date-Due",
    "03.Invoice-Date-Out",
    "03.Invoice-Date-Out",
    "04.Invoice-Deposit-Dates",
    "05.Invoice-Order-St",
    "04.Invoice-Deposit-Dates",
    "05.Invoice-Order-Status",
    "06.Bill-To-Organization-Name-Conference",
    "07.Bill-To-Organization-Address",
    "Treas. Phone",
    "12.Bill-To-Organization-Treas. Fax",
    "13.Bill-To-Organization-Email Address",
    "14.Bill-To-Organization-Tax Certificate",
    "15.Ship-To-Customer-Name-Title",
    "16.Ship-To-Customer-Address",
    "17.Ship-To-Customer-City,State,Zip",
    "18.Ship-To-Customer-Home Phone",
    "19.Ship-To-Customer-Work Phone",
    "20.Ship-To-Customer-Cell Phone",
    "21.Ship-To-Customer-Fax Number",
    "22.Ship-To-Customer-Email Address",
    "23.Ship-To-Customer-Tracking Numbers",
    "24.Credit-Card-Name",
    "25.Credit-Card-Type",
    "26.Credit-Card-VC",
    "27.Credit-Card-Number",
    "28.Credit-Card-Expiration",
    "29.Credit-Card-Address",
    "30.Credit-Card-City,State,Zip",
    "31.Products-Quantity",
    "32.Products-Product Name",
    "33.Products-Item Color",
    "34.Products-Ink Color",
    "35.Products-Club Name",
    "36.Products-Front Design",
    "37.Products-Back Design",
    "38.Products-Pocket Design",
    "39.Products-Above Pocket Design",
    "40.Products-Sleeve Design",
    "41.Products-Kids 4-5",
    "42.Products-Kids 6-8",
    "43.Products-Kids 10-12",
    "44.Products-Kids 14-16",
    "45.Products-Adults Small",
    "46.Products-Adults Medium",
    "47.Products-Adults Large",
    "48.Products-Adults X-Large",
    "49.Products-Adults 2X-Large",
    "50.Products-Adults 3X-Large",
    "51.Products-Price",
    "52.Products-Total",
    "53.Deposits-Check",
    "54.Deposits-Cash",
    "55.Deposits-Card",
    "56.Totals-Subtotal",
    "57.Totals-Screen-Fee",
    "58.Totals-Artwork-Fee",
    "59.Totals-Rush-Fee",
    "60.Totals-Shipping-Fee",
    "61.Totals-Sales-Tax-Fee",
    "62.Totals-Card-Fee",
    "63.Totals-Total",
    "64.Totals-Deposit",
    "65.Totals-Refund",
    "66.Totals-Balance",
    "67.Instructions-Instructions",
    "68.Internal-Notes-Internal-Notes",
  ],
  orderStatus:[
    "00.Quote.Pending",
    "01.Ready.Pending",
    "02.Ordering.Pending",
    "03.Production.Pending",
    "04.Returning.Pending",
    "05.Shipped.Monthly",
    "06.Picked-up.Monthly",
    "07.Delivered.Monthly",
    "08.Canceled.Monthly",
    "09.Refunded.Monthly",
    "10.Credit.Pending",
  ]
};

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
          <ControlBox title={"Category"} data={data.categories} />
        </Grid>
        <Grid item lg>
          <ControlBox title={"Field"} data={data.fields}/>
        </Grid>
        <Grid item lg>
          <ControlBox title={"Order/Payment Stauts"} data={data.orderStatus}/>
        </Grid>
        <Grid item lg>
          <ControlBox title={"Product Field"} data={data.fields}/>
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
