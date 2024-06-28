import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const products = [
  {
    id: "1",
    name: "Logbook Loans",
    description: "Unlock equity in your motor vehicle assets.",
  },
  {
    id: "2",
    name: "Insurance Premium Financing",
    description: "Manage insurance expense with monthly premiums.",
  },
  {
    id: "3",
    name: "Invoice Factoring",
    description: "Access immediate financing from pending invoices.",
  },
  {
    id: "4",
    name: "Motor Import Financing",
    description: "Significant savings on motor vehicle purchase.",
  },
  {
    id: "5",
    name: "Import Duty Financing",
    description: "Settle port charges promptly and seamlessly.",
  },
  {
    id: "6",
    name: "Ezua Chapaa",
    description: "Access high cash limits on your mobile or credit card.",
  },
  {
    id: "7",
    name: "CARS 360",
    description: "Reliable car purchase support for hassle-free ownership.",
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <Typography variant="h5">Product not found</Typography>;
  }

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        {product.name}
      </Typography>
      <Typography variant="body1" paragraph>
        {product.description}
      </Typography>
    </Box>
  );
};

export default ProductDetail;
