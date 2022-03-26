import React, { useState } from "react";
import CameraButton from "../components/homePage/CameraButton";
import ImageUploadButton from "../components/homePage/ImageUploadButton";
import AudioUploadButton from "../components/homePage/AudioUploadButton";
import SearchButton from "../components/homePage/SearchButton";
import AccountButton from "../components/homePage/AccountButton";
import RecentButton from "../components/homePage/RecentButton";

import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function HomePage() {
  const buttonTypes = ["audioRecord", "camera", "imageUpload", "audioUpload"];
  const [counter, setCounter] = useState(0);
  const [buttonType, setButtonType] = useState("camera");

  return (
    <>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <RecentButton />
        <AccountButton />
      </Grid>


      <Typography
        sx={{ color: "white", textAlign: "center", paddingTop: 13 }}
        variant="h6"
        gutterBottom
        component="div"
      >
        Tap to take a photo
      </Typography>

      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: 2,
        }}
      >
        <IconButton
          aria-label="arrowBackIosIcon"
          disabled={counter === 0}
          onClick={countDown}
        >
          <ArrowBackIosIcon
            sx={{
              color: "white",
            }}
          />
        </IconButton>

        {buttonType === "camera" && <CameraButton />}

        {buttonType === "imageUpload" && <ImageUploadButton />}

        {buttonType === "audioUpload" && <AudioUploadButton />}

        <IconButton
          aria-label="arrowForwardIosIcon"
          disabled={counter === 3}
          onClick={countUp}
        >
          <ArrowForwardIosIcon
            sx={{
              color: "white",
            }}
          />
        </IconButton>
      </Grid>

      <SearchButton />
    </>
  );

  function countDown() {
    setButtonType(buttonTypes[counter - 1]);
    setCounter(counter - 1);
  }

  function countUp() {
    setButtonType(buttonTypes[counter + 1]);
    setCounter(counter + 1);
  }
}
