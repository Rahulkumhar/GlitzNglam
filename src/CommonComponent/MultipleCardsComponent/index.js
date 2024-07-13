import * as React from "react";
import { Container, Grid } from "@mui/material";
import CardComponent from "../Card";

const MultipleCardsComponent = ({ list }) => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        {list.map((item) => (
          <Grid item xs={4} md={4}>
            <CardComponent item={item} key={item?.id} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MultipleCardsComponent;
