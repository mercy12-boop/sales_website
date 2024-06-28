// src/components/InstallmentCalculator.js
import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const InstallmentCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [installment, setInstallment] = useState(null);

  const calculateInstallment = () => {
    const P = parseFloat(principal);
    const R = parseFloat(rate) / 100 / 12;
    const T = parseInt(time);
    const EMI = (P * R * Math.pow(1 + R, T)) / (Math.pow(1 + R, T) - 1);
    setInstallment(EMI.toFixed(2));
  };

  return (
    <Box sx={{ mt: 4 }}>
      <TextField
        label="Principal Amount"
        value={principal}
        onChange={(e) => setPrincipal(e.target.value)}
        fullWidth
        required
      />
      <TextField
        label="Annual Interest Rate (%)"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        fullWidth
        required
      />
      <TextField
        label="Time Period (Months)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        fullWidth
        required
      />
      <Button
        variant="contained"
        color="primary"
        onClick={calculateInstallment}
        sx={{ mt: 2 }}
      >
        Calculate
      </Button>
      {installment && (
        <Typography variant="h6" sx={{ mt: 2 }}>
          Monthly Installment: ${installment}
        </Typography>
      )}
    </Box>
  );
};

export default InstallmentCalculator;
