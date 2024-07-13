import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const PaperComponent = () => {
  return (
    <Paper
      sx={{
        textalign: "center",
        color: "black",
        height: 100,
        lineHeight: "30px",
      }}
    >
      <Box
        sx={{
          borderRadius: 2,
          bgcolor: "background.default",
        }}
      >
        <h4>
          "Jewellery is eternal, it never goes out of fashion, it will always be
          there"
        </h4>
      </Box>
    </Paper>
  );
};
export default PaperComponent;
