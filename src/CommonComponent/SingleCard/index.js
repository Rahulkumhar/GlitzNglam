import * as React from "react";
import CardMedia from "@mui/material/CardMedia";

const SingleCardComponent = ({ item }) => {
  return (
    <CardMedia
      sx={{ height: 400, maxWidth: 850, margin: 2 }}
      image={item.image}
      title={item.label}
    />
  );
};

export default SingleCardComponent;
