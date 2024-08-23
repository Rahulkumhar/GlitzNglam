import * as React from "react";
import { Container, Grid } from "@mui/material";
import CardComponent from "../Card";

const MultiCardComponent = ({ list }) => {
  return (
    <Container maxWidth="x-lg">
      <Grid
        container
        spacing={2}
        marginBottom={2}
        style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        {list?.map((item) => (
          <Grid item xs={3} md={3}>
            <CardComponent item={item} key={item?.id} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MultiCardComponent;
