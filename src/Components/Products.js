// src/Components/Products.js
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import logbookLoanImg from "../assets/logbook-loan.png";

import insuranceImg from "../assets/insurance.png";
import invoiceImg from "../assets/invoice.png";
import motorImportImg from "../assets/motor-import.png";
import importDutyImg from "../assets/import-duty.png";
import ezuaChapaaImg from "../assets/ezua-chapaa.png";
import cars360Img from "../assets/cars360.png";

const Products = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Our Products
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <img
            src={logbookLoanImg}
            alt="Logbook Loans"
            style={{ width: "100%" }}
          />
          <Typography variant="h5">Logbook Loans</Typography>
          <Typography variant="body1">
            Logbook financing unlocks the equity held in our client’s Motor
            Vehicle assets without requiring them to cede the vehicle’s
            ownership. This in turn unlocks access to working capital and
            funding for emergency lifestyle requirements. Access up to Kes
            2,000,000 fast cash to help with your personal & business financial
            needs without having to sell the securing asset. Get up to 60% of
            the car’s value.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <img
            src={insuranceImg}
            alt="Insurance Premium Financing"
            style={{ width: "100%" }}
          />
          <Typography variant="h5">Insurance Premium Financing</Typography>
          <Typography variant="body1">
            Insurance Premium Financing enables our clients better manage their
            insurance expense through manageable monthly premiums as opposed to
            a lumpsum upfront sum. All that is required is an upfront deposit of
            30% and the insurance certificate is processed within 2 hours.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={invoiceImg}
            alt="Invoice Factoring"
            style={{ width: "100%" }}
          />
          <Typography variant="h5">Invoice Factoring</Typography>
          <Typography variant="body1">
            Invoice Factoring is a financing facility enabling business owners
            access immediate financing from invoices that are yet to mature.
            Momentum grants an immediate cash advance of up to 85% of the
            invoice value within 24 hours unlocking liquidity.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={motorImportImg}
            alt="Motor Import Financing"
            style={{ width: "100%" }}
          />
          <Typography variant="h5">Motor Import Financing</Typography>
          <Typography variant="body1">
            This solution unlocks significant cost savings on motor vehicle
            purchase by leveraging Momentum’s vast marketplace network and bulk
            vehicle purchase benefits. Clients only require a 25% upfront
            deposit to initiate the importation process. Access up to 75%
            financing and pay in easy instalments of up to 24 months.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={importDutyImg}
            alt="Import Duty Financing"
            style={{ width: "100%" }}
          />
          <Typography variant="h5">Import Duty Financing</Typography>
          <Typography variant="body1">
            Import Duty Financing is a short term financing facility designed to
            enable clients settle port charges promptly & seamlessly thus
            avoiding storage and demurrage charges. Momentum settles import duty
            charges, storage charges and accrued demurrage costs (if any),
            clearing, forwarding & other logistical costs.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={ezuaChapaaImg}
            alt="Ezua Chapaa"
            style={{ width: "100%" }}
          />
          <Typography variant="h5">Ezua Chapaa</Typography>
          <Typography variant="body1">
            Ezua Chapaa, in partnership with MasterCard, allows clients access
            high cash limits on their mobile or a MasterCard credit card to sort
            all their emergencies. Access up to 100,000 Kes on your mobile phone
            by dialing *674# or a MasterCard credit card.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={cars360Img} alt="CARS 360" style={{ width: "100%" }} />
          <Typography variant="h5">CARS 360</Typography>
          <Typography variant="body1">
            CARS360’s mission is to take out the guess work from car
            importation. Offering reliable, competitively priced & authoritative
            car purchase support ensuring hassle free car ownership. Only 25%
            deposit commitment needed whilst extending access to
            personalised/customized vehicle specs with genuine mileage –
            typically not accessible locally.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Products;
