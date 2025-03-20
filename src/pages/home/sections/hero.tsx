import {
  Box,
  Button,
  Grid,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import CustomContainer from "../../../compoonents/container";
import capIcon from "../../../assets/images/graduation_cap.svg";
import image from "../../../assets/images/about-img.png";

import { motion } from "framer-motion";

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const tablet = useMediaQuery(theme.breakpoints.only("md"));

  return (
    <Box>
      <Toolbar />
      <Toolbar />
      <CustomContainer>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={7}>
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 50, x: 50 }}
                whileInView={{ opacity: 1, y: 0, x: 0, transition: { delay: .2, duration: 0.5 } }}
                viewport={{ once: false, amount: 0.5 }}
                style={{ fontSize: 40, fontWeight: 600 }}
              >
                Explore. Learn. Thrive
              </motion.h1>
              <motion.p
               initial={{ opacity: 0, y: 50, }}
               whileInView={{ opacity: 1, y: 0, transition: { delay: .2, duration: 0.5 } }}
               viewport={{ once: false, amount: 0.5 }}
                style={{
                  fontSize: 18,
                  fontWeight: 400,
                  width: isMobile ? "90%" : "75%",
                }}
              >
                From study programs that shape careers to tailored business and
                travel packages, we connect you to opportunities that broaden
                your horizons and enrich your life.
              </motion.p>
              <Box p={2} />
              <Button
                variant="contained"
                sx={{ textTransform: "capitalize", px: 2, py: 1 }}
              >
                Get Started
              </Button>
            </div>
          </Grid>
          {!isMobile && (
            <Grid item xs={12} sm={12} md={6} lg={5}>
              <Box
                position={"relative"}
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"end"}
              >
                <img src={capIcon} alt="" />
                <Box p={4} />
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  initial={{ opacity: 0, y: 50, }}
                  whileInView={{ opacity: 1, y: 0, transition: { delay: .2, duration: 0.5 } }}
                  viewport={{ once: false, amount: 0.5 }}
                  style={{
                    width: "55%",
                    height: 300,
                    paddingRight: 8,
                    marginRight: -8,
                    border: "1px solid #6D6D6D",
                    borderBottomRightRadius: 140,
                    borderBottomLeftRadius: 140,
                  }}
                >
                  <Box
                    sx={{
                      height: 300,
                      position: "relative",
                      overflow: "hidden",
                      backgroundImage: `url(${image})`,
                      backgroundRepeat: "no-repeat",
                      borderBottomRightRadius: 140,
                      borderBottomLeftRadius: 140,
                    }}
                  />
                </motion.div>
              </Box>
            </Grid>
          )}
        </Grid>
        <Box p={2} />
        {!isMobile && (
          <Box
            width={"100%"}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"baseline"}
          >
            <Box position={"relative"} flex={1}>
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                initial={{ opacity: 0, y: 50, }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: .2, duration: 0.5 } }}
                viewport={{ once: false, amount: 0.5 }}
                style={{
                  padding: 8,
                  height: 256,
                  backgroundImage: `url(${image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderBottomLeftRadius: 140,
                }}
              ></motion.div>
            </Box>
            <Box p={3} />
            <Box position={"relative"} flex={1}>
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                initial={{ opacity: 0, y: 50, }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: .2, duration: 0.5 } }}
                viewport={{ once: false, amount: 0.5 }}
                style={{
                  paddingRight: 8,
                  height: 320,
                  border: "1px solid #6D6D6D",
                  borderTopRightRadius: 140,
                  borderTopLeftRadius: 140,
                }}
              >
                <Box
                  sx={{
                    height: 320,
                    position: "relative",
                    overflow: "hidden",
                    backgroundImage: `url(${image})`,
                    backgroundRepeat: "no-repeat",
                    borderTopRightRadius: 140,
                    borderTopLeftRadius: 140,
                  }}
                />
              </motion.div>
            </Box>
            <Box p={3} />
            <Box flex={1}>
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                initial={{ opacity: 0, y: 50, }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: .2, duration: 0.5 } }}
                viewport={{ once: false, amount: 0.5 }}
                style={{
                  height: 256,
                  padding: 8,
                  backgroundImage: `url(${image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderBottomRightRadius: 140,
                }}
              ></motion.div>
            </Box>
          </Box>
        )}
      </CustomContainer>
    </Box>
  );
};

export default Hero;
