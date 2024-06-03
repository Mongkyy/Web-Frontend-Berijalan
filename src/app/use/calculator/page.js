"use client"

// INI HANYA UNTUK MENGISI KONTEN DI HOME BUKAN KALKULATOR YANG MENARIK!!!!


import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import { Add, Remove, Clear, Calculate } from "@mui/icons-material";
import { useRouter } from "next/navigation";

export default function Calculator() {
    const router = useRouter()
  const [result, setResult] = useState(0);

  const handleAdd = () => {
    setResult((prevResult) => prevResult + 1);
  };

  const handleSubtract = () => {
    setResult((prevResult) => prevResult - 1);
  };

  const handleClear = () => {
    setResult(0);
  };

  return (
    
    <div className="flex justify-center items-center h-screen">
        <Button
            onClick={() => router.push("/")}
            variant="outlined"
            color="primary"
            style={{ color: "black", position: "absolute", top: "20px", left: "20px" }}
            >
            Back to Dashboard
         </Button>
      <div className="text-center">
        <h2>Simple Calculator</h2>
        <h3>Result: {result}</h3>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button variant="contained" onClick={handleAdd} startIcon={<Add />}>
              Add
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={handleSubtract} startIcon={<Remove />}>
              Subtract
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={handleClear} startIcon={<Clear />}>
              Clear
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
