import * as React from "react";
import CardMedia from "@mui/material/CardMedia";

const SingleCardComponent = ({ item }) => {
  return (
    <CardMedia
      sx={{ height: 300, maxWidth: 950, margin: 4, padding: 4 }}
      image={item.image}
      title="Title of the Image"
    />
  );
};

export default SingleCardComponent;
