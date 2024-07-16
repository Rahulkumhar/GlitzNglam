import { Container, Grid } from "@mui/material";
import React from "react";
import CardComponent from "../../CommonComponent/Card";
import CarouselComponent from "../../CommonComponent/CarouselComponent";
import VideoCardComponent from "../../CommonComponent/VideoCardComponent";
import { products } from "../Productslist/constant";

const Home = () => {
  return (
    <>
      <CarouselComponent />
      <Container maxWidth="x-lg" sx={{ marginTop: 5 }}>
        <Grid container spacing={2}>
          {products.list1.map((item) => (
            <Grid item xs={4} md={4}>
              <CardComponent item={item} key={item?.id} />
            </Grid>
          ))}
        </Grid>
        <VideoCardComponent item={products.list1} key={products?.list1?.id} />
      </Container>
    </>
  );
};

export default Home;
