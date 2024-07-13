import * as React from "react";
import { Container, Grid } from "@mui/material";
import CardComponent from "../Card";

const MultiCardComponent = ({ list }) => {
  return (
    <Container maxWidth="md">
      <Grid
        container
        spacing={2}
        marginBottom={2}
        style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        {list.map((item) => (
          <Grid item xs={6} md={6}>
            <CardComponent item={item} key={item?.id} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MultiCardComponent;
