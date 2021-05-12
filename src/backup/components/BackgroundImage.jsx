import { Box, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.background[1],
    // borderLeft: `2px solid ${theme.palette.primary.main}`,
    borderLeft: `2px solid #D4F5F2`,
  },
  image: {
    height: "100%",
    width: "100%",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
}));
export default function BackgroundImage({ Image, imageSrc, imageAlt }) {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box
        className={classes.image}
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        {Image}
        {/* {imageSrc && <img src={imageSrc} alt={imageAlt} />} */}
      </Box>
    </Box>
  );
}
