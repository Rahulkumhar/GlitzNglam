import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Diamond Sets",
    imgPath:
      "https://images.unsplash.com/photo-1588444968576-f8fe92ce56fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRpYW1vbmQlMjBuZWNrbGFjZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    label: "Gold Necklace Sets",
    imgPath:
      "https://media.istockphoto.com/id/982488252/photo/pearl-kundan-jewelry-neck-set-with-earrings-closeup-macro-image-with-black-background.webp?b=1&s=170667a&w=0&k=20&c=SYhcWUX7NIkjOrZ3MaBDZE6mmB1ecyEjl7APU-p0LJg=",
  },
  {
    label: "Gold Bracelets and Bangles",
    imgPath:
      "https://www.joyalukkas.in/media/catalog/product/d/s/ds1700035907_10.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover",
  },
  {
    label: "Silver Jewellery",
    imgPath:
      "https://images.cltstatic.com/media/product/350/AT00169-SS0100-oxidised-owning-my-clumsy-nature-bracelet-prd-3-pd.jpg",
  },
];

const CarouselComponent = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ flexGrow: 1, marginTop: 10 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 60,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
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
                  height: 500,
                  display: "fit",
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
};

export default CarouselComponent;
