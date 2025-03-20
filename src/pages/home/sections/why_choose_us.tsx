import { Box, Button, Container, Grid, Toolbar } from "@mui/material";
import React from "react";
import image from "../../../assets/images/why_us.png";
import CustomContainer from "../../../compoonents/container";

import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <Box bgcolor={"#F7F7F7"}>
      <Toolbar />
      <Toolbar />
      <CustomContainer>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6} lg={5} px={4} color={"black"}>
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: false, amount: 0.5 }}
              style={{
                fontSize: 24,
                fontWeight: 600,
                color: "black",
              }}
            >
              Why choose Us?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: false, amount: 0.5 }}
              style={{
                color: "black",
              }}
            >
              At Whiterock Global Travels, we prioritize personalized service,
              reliability, and excellence to help you achieve your dreams—be it
              through education, business ventures, or world-class travel
              experiences.
              <br />
              <br />
              We tailor every package to match your unique goals, whether it's
              studying abroad, expanding your business, or exploring new
              destinations.
            </motion.p>
            <Toolbar />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <Button
                variant="contained"
                sx={{ borderRadius: 4, px: 2, py: 1, textTransform: "none" }}
              >
                Schedule a call
              </Button>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={7}>
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: false, amount: 0.5 }}
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
