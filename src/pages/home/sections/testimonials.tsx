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

const Testimonials = () => {
  const theme = useTheme();
  const [deviceType, setDeviceType] = React.useState("mobile");
  const customSlider: React.RefObject<Slider> = React.createRef<any>();
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
        ? testimonials.length -
          (!mobile && !tablet ? 3 : tablet ? 2 : 1)
        : prevIndex - (!mobile && !tablet ? 3 : tablet ? 2 : 1)
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex ===
      testimonials.length -
        (!mobile && !tablet ?  3 : tablet ? 2 : 1)
        ? 0
        : prevIndex + (!mobile && !tablet ? 3 : tablet ? 2 : 1)
    );
  };

  const getTestimonialClasses = (index: number) => {
    return `testimonial-item ${index === currentIndex ? "active" : ""}`;
  };
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
          <p
            style={{
              fontSize: 14,
              fontWeight: 400,
              lineHeight: 1.0,
              color: "#7F56D9",
            }}
          >
            Testimonial
          </p>
          <h3
            style={{
              fontSize: 24,
              fontWeight: 600,
              marginTop: -4,
            }}
          >
            What Our Clients Say
          </h3>
        </Box>
        <Box p={2} />
        <div>
          <Grid container spacing={2}>
            {testimonials
              .slice(
                currentIndex,
                !mobile && !tablet ? currentIndex + 3 : tablet ? currentIndex + 2 : currentIndex + 1
              )
              .map((testimonial, index) => (
                <Grid item xs={12} sm={6} md={4} key={testimonial.id}>
                  <Box bgcolor={currentIndex === index ? "red" : "transparent"}>
                    <Typography variant="body1" className="testimonial-text">
                      "{testimonial.text}"
                    </Typography>
                    <Typography variant="h6" className="testimonial-author">
                      - {testimonial.author}
                    </Typography>
                  </Box>
                </Grid>
              ))}
          </Grid>

          <Box className="navigation-buttons">
            <Button variant="contained" color="primary" onClick={goToPrev}>
              Prev
            </Button>
            <Button variant="contained" color="primary" onClick={goToNext}>
              Next
            </Button>
          </Box>
        </div>
        <Box
          width={"100%"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <IconButton
            sx={{
              bgcolor: "#000",
              color: "white",
            }}
            onClick={() => customSlider?.current?.slickPrev()}
          >
            <Typography>{"<"}</Typography>
          </IconButton>

          <IconButton
            sx={{
              bgcolor: "#000",
              color: "white",
            }}
            onClick={() => customSlider?.current?.slickNext()}
          >
            <Typography>{">"}</Typography>
          </IconButton>
        </Box>
      </CustomContainer>
      <Toolbar />
    </Box>
  );
};

export default Testimonials;
