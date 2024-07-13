import { Container, Grid } from "@mui/material";
import React from "react";
import CardComponent from "../../CommonComponent/Card";
import CarouselComponent from "../../CommonComponent/CarouselComponent";
import VideoCardComponent from "../../CommonComponent/VideoCardComponent";

const Home = () => {
  return (
    <>
      <CarouselComponent />
      <Container maxWidth="x-lg" sx={{ marginTop: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={4} md={4}>
            <CardComponent />
          </Grid>
          <Grid item xs={4} md={4}>
            <CardComponent />
          </Grid>
          <Grid item xs={4} md={4}>
            <CardComponent />
          </Grid>
        </Grid>
        <VideoCardComponent />
      </Container>
    </>
  );
};

export default Home;
