import React from "react";
import ThankyouGif from "../../Assets/Thank You.gif";
import { Container, Typography, Box, Button } from "@mui/material";

const ThankYou = () => {
  return (
    <Container sx={{ margin: 10 }}>
      <Box sx={{ textAlign: "center", marginTop: 5, marginBottom: 15 }}>
        <img
          src={ThankyouGif}
          alt="Thank You"
          style={{
            width: "100%",
            maxWidth: "400px",
            margin: "0 auto",
            display: "block",
            marginTop: "30px", // Adjust the margin as needed
          }}
        />
        <Typography variant="h3" color="#15333D" gutterBottom>
          Thank you for ordering
        </Typography>
        <Button variant="contained" color="primary" href="/products">
          Continue Shopping
        </Button>
      </Box>
    </Container>
  );
};
export default ThankYou;
