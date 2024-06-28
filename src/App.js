import React from "react";
import {
  Container,
  Typography,
  Box,
  Link as MuiLink,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import { Facebook, Twitter, Phone } from "@mui/icons-material";
import { BrowserRouter as Router, Link } from "react-router-dom";
import LeadForm from "./Components/LeadForm";
import InstallmentCalculator from "./Components/InstallmentCalculator";
import Chatbot from "./Components/Chatbot";
import Products from "./Components/Products";
import backgroundImg from "./assets/abuja-nigeria.jpg";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Container maxWidth="lg" disableGutters>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              MOMENTUM Kenya
            </Typography>
            <nav>
              <MuiLink
                component={Link}
                to="/products"
                variant="button"
                style={{ margin: "0 10px", color: "#fff" }}
              >
                Products
              </MuiLink>
              <MuiLink
                component={Link}
                to="/apply"
                variant="button"
                style={{ margin: "0 10px", color: "#fff" }}
              >
                Apply Now
              </MuiLink>
            </nav>
          </Toolbar>
        </AppBar>

        <Box
          sx={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <Box sx={{ bgcolor: "rgba(0, 0, 0, 0.5)", p: 3 }}>
            <Typography variant="h2" gutterBottom>
              Welcome to MOMENTUM Kenya
            </Typography>
            <Typography variant="h5">
              Structured Working Capital Solutions for Individuals and SMEs
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mt: 4, mb: 4, textAlign: "center" }}>
          <Typography variant="h4" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph>
            MOMENTUM was founded in March 2017 with the purposeful intent to
            meet an overwhelming market need of providing structured working
            capital solutions to Individuals and Small Medium Enterprises
            (SMEs).
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
            backgroundColor: "#4A90E2",
            color: "#fff",
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
                color="inherit"
              >
                <Facebook />
              </IconButton>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                color="inherit"
              >
                <Twitter />
              </IconButton>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="body2" color="inherit">
                &copy; 2023 MOMENTUM Kenya
              </Typography>
            </Grid>
          </Grid>
        </footer>
      </Container>
    </Router>
  );
};

export default App;
