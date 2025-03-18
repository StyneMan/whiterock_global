import { Box, Button, Container, Grid, Toolbar } from "@mui/material";
import React from "react";
import image from "../../../assets/images/why_us.png";
import CustomContainer from "../../../compoonents/container";

const WhyChooseUs = () => {
  return (
    <Box bgcolor={"#F7F7F7"}>
      <Toolbar />
      <Toolbar />
      <CustomContainer>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6} lg={5} px={4} color={'black'} >
            <h3
              style={{
                fontSize: 24,
                fontWeight: 600,
                color: 'black'
              }}
            >
              Why choose Us?
            </h3>
            <p style={{
              color: 'black'
            }} >
              At Whiterock Global Travels, we prioritize personalized service,
              reliability, and excellence to help you achieve your dreams—be it
              through education, business ventures, or world-class travel
              experiences.
              <br />
              <br />
              We tailor every package to match your unique goals, whether it's
              studying abroad, expanding your business, or exploring new
              destinations.
            </p>
            <Toolbar />
            <Button
              variant="contained"
              sx={{ borderRadius: 4, px: 2, py: 1, textTransform: "none" }}
            >
              Schedule a call
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={7}>
            <img
              alt=""
              src={image}
              width={"100%"}
              style={{
                borderRadius: 10,
              }}
            />
          </Grid>
        </Grid>
      </CustomContainer>
      <Toolbar />
    </Box>
  );
};

export default WhyChooseUs;
