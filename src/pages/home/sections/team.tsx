import {
  Box,
  Button,
  Grid,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import CustomContainer from "../../../compoonents/container";
import { motion } from "framer-motion";
import image from "../../../assets/images/why_us.png";

import arrowLeft from "../../../assets/images/arrow_1.svg";
import arrowRight from "../../../assets/images/arrow_2.svg";

const testimonials = [
  { id: 1, text: "This is the first testimonial.", author: "John Doe" },
  { id: 2, text: "This is the second testimonial.", author: "Jane Smith" },
  { id: 3, text: "This is the third testimonial.", author: "Alice Johnson" },
  { id: 4, text: "This is the fourth testimonial.", author: "Bob Brown" },
];

const Team = () => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [deviceType, setDeviceType] = React.useState("mobile");
  const mobile = useMediaQuery(theme.breakpoints.only("xs"));
  const tablet = useMediaQuery(theme.breakpoints.only("sm"));
  const tabletBig = useMediaQuery(theme.breakpoints.only("md"));

  React.useEffect(() => {
    if (mobile) {
      setDeviceType("mobile");
    } else if (tablet) {
      setDeviceType("tablet");
    } else if (tabletBig) {
      setDeviceType("tabletBig");
    } else {
      setDeviceType("pc");
    }
  }, [mobile, tablet, tabletBig]);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? testimonials.length - (!mobile && !tablet ? 3 : tablet ? 2 : 1)
        : prevIndex - (!mobile && !tablet ? 3 : tablet ? 2 : 1)
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex ===
      testimonials.length - (!mobile && !tablet ? 3 : tablet ? 2 : 1)
        ? 0
        : prevIndex + (!mobile && !tablet ? 3 : tablet ? 2 : 1)
    );
  };

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
              Meet Our Dedicated Team
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
          <Grid item container spacing={3} xs={12} sm={12} md={6} lg={7}>
            {testimonials
              .slice(
                currentIndex,
                !mobile && !tablet
                  ? currentIndex + 2
                  : tablet
                  ? currentIndex + 1
                  : currentIndex + 1
              )
              .map((testimonial, index) => (
                <Grid item xs={12} sm={12} md={6} key={testimonial.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.2, duration: 0.5 },
                    }}
                    viewport={{ once: false, amount: 0.5 }}
                  >
                    <TeamCard />
                  </motion.div>
                </Grid>
              ))}
            <Box p={2} />
            <Box
              width={"100%"}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box onClick={goToPrev}>
                <img alt="" src={arrowLeft} />
              </Box>

              <Box onClick={goToNext}>
                <img alt="" src={arrowRight} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CustomContainer>
      <Toolbar />
    </Box>
  );
};

const TeamCard = () => {
  return (
    <Box
      height={300}
      borderRadius={3}
      sx={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    ></Box>
  );
};

export default Team;
