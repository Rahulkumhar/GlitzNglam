import * as React from "react";
import CardMedia from "@mui/material/CardMedia";

const SingleCardComponent = ({ item }) => {
  return (
    <CardMedia
      sx={{ height: 400, maxWidth: 950, margin: 4, padding: 20 }}
      image={item.image}
      title={item.label}
    />
  );
};

export default SingleCardComponent;
