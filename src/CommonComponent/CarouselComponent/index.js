import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
//import MobileStepper from "@mui/material/MobileStepper";
//import Button from "@mui/material/Button";
//import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
//import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Diamond Sets",
    imgPath:
      "https://mintdiamonds.com/cdn/shop/files/Mint_Diamonds_Homepage_1600x800.progressive.jpg?v=1613713393",
  },
  {
    label: "Gold Necklace Sets",
    imgPath:
      "https://manubhai.in/img/slider/tradition_with_twist_web_banner.jpg",
  },
  {
    label: "Gold Bracelets and Bangles",
    imgPath:
      "https://cdn.caratlane.com/media/static/images/V4/2024/CL/07_JULY/Banner/LatestDesigns/1X.webp",
  },
  {
    label: "Stylish Jewellery",
    imgPath:
      "https://sohnaa.com/cdn/shop/collections/Banner_29_67762016-2c7f-423c-a714-b1133e112a7a.jpg?v=1703846645&width=2000",
  },
];

const CarouselComponent = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  // const maxSteps = images.length;

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ flexGrow: 1, marginTop: 8 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 800,
                  display: "fit",
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.imgPath}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
};

export default CarouselComponent;
