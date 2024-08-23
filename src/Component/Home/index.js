import { Container, Grid } from "@mui/material";
import React from "react";
import CardComponent from "../../CommonComponent/Card";
import CarouselComponent from "../../CommonComponent/CarouselComponent";
import VideoCardComponent from "../../CommonComponent/VideoCardComponent";
import { products } from "../Productslist/constant";
import SingleCardComponent from "../../CommonComponent/SingleCard";
import ComplexButton from "../../CommonComponent/ComplexButton";

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
        <Grid container spacing={2}>
          {products.list3.map((item) => (
            <Grid item xs={6} md={6}>
              <SingleCardComponent item={item} key={item?.id} />
            </Grid>
          ))}
        </Grid>
        <ComplexButton />
        <VideoCardComponent item={products.list1} key={products?.list1?.id} />
      </Container>
    </>
  );
};

export default Home;
