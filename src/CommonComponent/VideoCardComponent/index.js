import { Grid } from "@mui/material";
import React from "react";
import JewelleryVideo from "../../Assets/JewelleryVideo.mp4";
import PaperComponent from "../PaperComponent";

const VideoCardComponent = () => {
  return (
    <Grid container spacing={2} sx={{ margin: 5 }}>
      <Grid item xs={6} md={6}>
        <video style={{ width: "700px" }} controls autoPlay muted>
          <source src={JewelleryVideo} />
        </video>
      </Grid>
      <Grid item xs={4} md={4}>
        <PaperComponent />
      </Grid>
    </Grid>
  );
};

export default VideoCardComponent;
