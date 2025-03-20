import {
  Avatar,
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
import "react-multi-carousel/lib/styles.css";
import "./testimonial.css";

import { motion } from "framer-motion";

import arrowLeft from "../../../assets/images/arrow_1.svg";
import arrowRight from "../../../assets/images/arrow_2.svg";

const testimonials = [
  { id: 1, text: "This is the first testimonial.", author: "John Doe" },
  { id: 2, text: "This is the second testimonial.", author: "Jane Smith" },
  { id: 3, text: "This is the third testimonial.", author: "Alice Johnson" },
  { id: 4, text: "This is the fourth testimonial.", author: "Bob Brown" },
  { id: 5, text: "This is the fifth testimonial.", author: "Charlie Davis" },
  { id: 6, text: "This is the sixth testimonial.", author: "David Wilson" },
];

const Testimonials = () => {
  const theme = useTheme();
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

  const [currentIndex, setCurrentIndex] = useState(0);

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
    <Box bgcolor={"#FFFFFF"} color={"black"}>
      <Toolbar />
      <CustomContainer>
        <Box
          display="flex"
          flexDirection="column"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 0.5 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            style={{
              fontSize: 14,
              fontWeight: 400,
              lineHeight: 1.0,
              color: "#7F56D9",
            }}
          >
            Testimonial
          </motion.p>
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
              marginTop: -4,
            }}
          >
            What Our Clients Say
          </motion.h3>
        </Box>
        <Box p={2} />
        <div>
          <Grid container spacing={2}>
            {testimonials
              .slice(
                currentIndex,
                !mobile && !tablet
                  ? currentIndex + 3
                  : tablet
                  ? currentIndex + 2
                  : currentIndex + 1
              )
              .map((testimonial, index) => (
                <Grid item xs={12} sm={6} md={4} key={testimonial.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.2, duration: 0.5 },
                    }}
                    viewport={{ once: false, amount: 0.5 }}
                  >
                    <TestimonialCard />
                  </motion.div>
                </Grid>
              ))}
          </Grid>
        </div>
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
      </CustomContainer>
      <Box p={2} />
    </Box>
  );
};

const TestimonialCard = () => {
  const theme = useTheme();

  return (
    <Box
      px={3}
      py={4}
      sx={{
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: 2,
      }}
    >
      <Box p={1} />
      <p style={{ fontSize: 14, fontWeight: 400, textAlign: "center" }}>
        Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>
      <Box p={2} />
      <Box
        display={"flex"}
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar variant="circular">JD</Avatar>
        <Box
          display={"flex"}
          flexDirection="column"
          justifyContent="start"
          alignItems="start"
          px={1}
        >
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 16,
            }}
          >
            Emily Jnr
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: 12,
            }}
          >
            Student
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
