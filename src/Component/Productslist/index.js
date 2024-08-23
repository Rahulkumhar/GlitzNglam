import React from "react";
import { Grid, Container } from "@mui/material";
import CarouselComponent from "../../CommonComponent/CarouselComponent";
import MultiCardComponent from "../../CommonComponent/MultiCardComponent";
import SingleCardComponent from "../../CommonComponent/SingleCard";
import PaperComponent from "../../CommonComponent/PaperComponent";
import MultipleCardsComponent from "../../CommonComponent/MultipleCardsComponent";
import { products } from "./constant";
import BannerImage from "../../Assets/Bangle Banner.jpg";
import DiamondBanner from "../../Assets/Diamond Banner.jpg";
import RingsBanner from "../../Assets/Rings Banner.jpg";

const ProductsList = () => {
  return (
    <>
      <Container maxWidth="x-lg" sx={{ marginTop: 10 }}>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={DiamondBanner}
            alt="Banner"
            style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
          />
        </div>
        <MultiCardComponent list={products.list1} />

        <Grid container spacing={2} marginBottom={2}>
          {products.list3.map((item) => (
            <Grid item xs={6} md={6}>
              <SingleCardComponent item={item} key={item.id} />
            </Grid>
          ))}
        </Grid>
        <Grid spacing={2}>
          <Grid item xs={4} md={4} marginBottom={2}>
            <MultipleCardsComponent list={products?.list2} />
          </Grid>
        </Grid>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={BannerImage}
            alt="Banner"
            style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
          />
        </div>

        <MultipleCardsComponent list={products.list4} />

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={RingsBanner}
            alt="Banner"
            style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
          />
        </div>

        <MultiCardComponent list={products.list5} />

        <Grid container spacing={2}>
          {products.list4.map((item) => (
            <Grid item xs={4} md={4}>
              <SingleCardComponent item={item} key={item.id} />
            </Grid>
          ))}
        </Grid>

        <CarouselComponent />
      </Container>
    </>
  );
};

export default ProductsList;
