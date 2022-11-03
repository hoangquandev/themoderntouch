import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import hawai from "../../../assets/images/slider/SLIDER-05.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 40,
  },
  image: {
    maxWidth: "100%",
    marginTop: 30,
  },
  text: {
    marginTop: 180,
  },
}));

const Hawaii = () => {
  const classes = useStyles();
  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <img src={hawai} className={classes.image} alt="" />
      <Box textAlign="left" className={classes.text}>
        <Typography fontSize="20px" fontFamily="Gotham">
          ORIGIN
        </Typography>
        <Typography fontSize="70px" fontFamily="TimesNewRomanItalic">
          Hawaii
        </Typography>
      </Box>
    </Stack>
  );
};

export default Hawaii;
