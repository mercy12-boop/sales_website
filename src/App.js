import React from "react";
import {
  Container,
  Typography,
  Box,
  Link,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import { Facebook, Twitter, Phone } from "@mui/icons-material";
import LeadForm from "./Components/LeadForm";
import InstallmentCalculator from "./Components/InstallmentCalculator";
import Chatbot from "./Components/Chatbot";
import Products from "./Components/Products";
import logo from "./assets/logo.png";
import "./App.css";

const App = () => {
  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <img
            src={logo}
            alt="MOMENTUM Kenya"
            style={{ height: "50px", marginRight: "10px" }}
          />
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            MOMENTUM Kenya
          </Typography>
          <nav>
            <Link
              href="#products"
              variant="button"
              style={{ margin: "0 10px", color: "#fff" }}
            >
              Products
            </Link>
            <Link
              href="#apply"
              variant="button"
              style={{ margin: "0 10px", color: "#fff" }}
            >
              Apply Now
            </Link>
          </nav>
        </Toolbar>
      </AppBar>

      <Box sx={{ mt: 4, mb: 4, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Welcome to MOMENTUM Kenya
        </Typography>
        <Typography variant="body1" paragraph>
          MOMENTUM was founded in March 2017 with the purposeful intent to meet
          an overwhelming market need of providing structured working capital
          solutions to Individuals and Small Medium Enterprises (SMEs).
        </Typography>
      </Box>

      <section id="products">
        <Products />
      </section>

      <section id="apply" style={{ marginTop: "50px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Apply Now
        </Typography>
        <LeadForm />
      </section>

      <section id="calculator" style={{ marginTop: "50px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Installment Calculator
        </Typography>
        <InstallmentCalculator />
      </section>

      <Chatbot />

      <footer
        style={{
          marginTop: "50px",
          padding: "20px 0",
          backgroundColor: "#f5f5f5",
          textAlign: "center",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Contact Us</Typography>
            <Typography variant="body1">
              <Phone /> +254 700 000 000
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Follow Us</Typography>
            <IconButton
              href="https://facebook.com"
              target="_blank"
              color="primary"
            >
              <Facebook />
            </IconButton>
            <IconButton
              href="https://twitter.com"
              target="_blank"
              color="primary"
            >
              <Twitter />
            </IconButton>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="body2" color="textSecondary">
              &copy; 2023 MOMENTUM Kenya
            </Typography>
          </Grid>
        </Grid>
      </footer>
    </Container>
  );
};

export default App;
