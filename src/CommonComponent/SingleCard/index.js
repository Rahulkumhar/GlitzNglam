import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Necklace from "../../Assests/necklace.jpg";

const SingleCardComponent = () => {
  return (
    <Card sx={{ maxWidth: 600, margin: "10px" }}>
      <CardMedia
        sx={{ height: 300 }}
        image={Necklace}
        title="Title of the Image"
      />
    </Card>
  );
};

export default SingleCardComponent;
