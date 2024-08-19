import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const PaperComponent = () => {
  return (
    <Paper
      sx={{
        textalign: "center",
        color: "#15333D",
        fontSize: "35px",
        height: 250,
        lineHeight: "75px",
      }}
    >
      <Box
        sx={{
          borderRadius: 2,
          bgcolor: "background.default",
          textAlign: "center",
        }}
      >
        <h3>
          "One is never enough of jewellery. Be ready for every occasion. "
        </h3>
      </Box>
    </Paper>
  );
};
export default PaperComponent;
