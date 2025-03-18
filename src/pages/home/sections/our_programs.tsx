import {
  Box,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import CustomContainer from "../../../compoonents/container";
// import "react-alice-carousel/lib/alice-carousel.css";
// import Carousel from "react-multi-carousel";
import Slider from "react-slick";
import "react-multi-carousel/lib/styles.css";

import "./testimonial.css";

const testimonials = [
  { id: 1, text: "This is the first testimonial.", author: "John Doe" },
  { id: 2, text: "This is the second testimonial.", author: "Jane Smith" },
  { id: 3, text: "This is the third testimonial.", author: "Alice Johnson" },
  { id: 4, text: "This is the fourth testimonial.", author: "Bob Brown" },
  { id: 5, text: "This is the fifth testimonial.", author: "Charlie Davis" },
  { id: 6, text: "This is the sixth testimonial.", author: "David Wilson" },
];

const OurPrograms = () => {
  const theme = useTheme();

  return (
    <Box bgcolor={"#FFFFFF"} color={"black"}>
      <Toolbar />
      <Toolbar />
      <CustomContainer>
        <Box
          display="flex"
          flexDirection="column"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <h3
            style={{
              fontSize: 24,
              fontWeight: 600,
              marginTop: -4,
            }}
          >
            Our Programs 
          </h3>
        </Box>
        <Box p={2} />
      </CustomContainer>
      <Toolbar />
    </Box>
  );
};

export default OurPrograms;
