import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>("");

  const handleButtonClick = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div style={{ width: "300px", margin: "50px auto" }}>
      <Typography variant="h4" gutterBottom>
        Calculator
      </Typography>
      <TextField
        variant="outlined"
        fullWidth
        value={input}
        onChange={() => {}}
        style={{ marginBottom: "20px" }}
        InputProps={{
          readOnly: true,
        }}
      />
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleButtonClick("7")}
          >
            7
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleButtonClick("8")}
          >
            8
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleButtonClick("9")}
          >
            9
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleButtonClick("/")}
          >
            ÷
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleButtonClick("4")}
          >
            4
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleButtonClick("5")}
          >
            5
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleButtonClick("6")}
          >
            6
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleButtonClick("*")}
          >
            ×
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleButtonClick("1")}
          >
            1
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleButtonClick("2")}
          >
            2
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleButtonClick("3")}
          >
            3
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleButtonClick("-")}
          >
            -
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleButtonClick("0")}
          >
            0
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleButtonClick(".")}
          >
            .
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" fullWidth onClick={handleClear}>
            C
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleButtonClick("+")}
          >
            +
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            fullWidth
            color="primary"
            onClick={handleEvaluate}
          >
            =
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Calculator;
