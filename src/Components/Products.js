import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const products = [
  {
    id: "1",
    name: "Logbook Loans",
    description: "Unlock equity in your motor vehicle assets.",
    link: "/products/1",
  },
  {
    id: "2",
    name: "Insurance Premium Financing",
    description: "Manage insurance expense with monthly premiums.",
    link: "/products/2",
  },
  {
    id: "3",
    name: "Invoice Factoring",
    description: "Access immediate financing from pending invoices.",
    link: "/products/3",
  },
  {
    id: "4",
    name: "Motor Import Financing",
    description: "Significant savings on motor vehicle purchase.",
    link: "/products/4",
  },
  {
    id: "5",
    name: "Import Duty Financing",
    description: "Settle port charges promptly and seamlessly.",
    link: "/products/5",
  },
  {
    id: "6",
    name: "Ezua Chapaa",
    description: "Access high cash limits on your mobile or credit card.",
    link: "/products/6",
  },
  {
    id: "7",
    name: "CARS 360",
    description: "Reliable car purchase support for hassle-free ownership.",
    link: "/products/7",
  },
];

const Products = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Our Products
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} md={6} key={product.id}>
            <Typography variant="h5">
              <RouterLink
                to={product.link}
                style={{ textDecoration: "none", color: "#4A90E2" }}
              >
                {product.name}
              </RouterLink>
            </Typography>
            <Typography variant="body1">{product.description}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
