import {
  Box,
  Button,
  Card,
  Grid,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import CustomContainer from "../../compoonents/container";
import image from "../../assets/images/about-img.png";
import { motion } from "framer-motion";

const items = [
  {
    title: "International Study Program",
    image: image,
    description:
      "Explore a global network of study programs tailored to your needs. From short-term language courses to specialized vocational and degree programs, language programs, high school and college programs and lots more.",
  },
  {
    title: "International Study Program",
    image: image,
    description:
      "Explore a global network of study programs tailored to your needs. From short-term language courses to specialized vocational and degree programs, language programs, high school and college programs and lots more.",
  },
  {
    title: "International Study Program",
    image: image,
    description:
      "Explore a global network of study programs tailored to your needs. From short-term language courses to specialized vocational and degree programs, language programs, high school and college programs and lots more.",
  },
  {
    title: "International Study Program",
    image: image,
    description:
      "Explore a global network of study programs tailored to your needs. From short-term language courses to specialized vocational and degree programs, language programs, high school and college programs and lots more.",
  },
];

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      <CustomContainer>
        <Toolbar />
        <Box
          width={"100%"}
          display="flex"
          flexDirection="column"
          alignItems="center"
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
              color: theme.palette.primary.main,
              fontSize: 12,
              marginBottom: -10,
            }}
          >
            Services
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 0.5 },
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Our Services
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 0.5 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            style={{ width: isMobile ? "96%" : "60%", textAlign: "center" }}
          >
            At Whiterock Global Travels, we are dedicated to providing
            exceptional services in international education, business, and
            travel. Our expertise lies in connecting individuals with
            opportunities and experiences that broaden horizons and enrich
            lives.
          </motion.p>
        </Box>
        <Toolbar />
        <Grid container spacing={4}>
          {items.map((elem) => (
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <ServiceCard elem={elem} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </CustomContainer>
      <Toolbar />
    </Box>
  );
};

const ServiceCard = ({ elem }: any) => {
  return (
    <Card elevation={0} sx={{ border: "1px solid #ccc", borderRadius: 2 }}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"start"}
        alignItems={"start"}
      >
        <Box
          sx={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          height={175}
          width={"100%"}
        />
        <Box px={3} py={4}>
          <Typography fontSize={18} fontWeight={500} gutterBottom>
            {elem?.title}
          </Typography>
          <Typography fontSize={14} fontWeight={400}>
            {elem?.description}
          </Typography>
          <Box p={2} />
          <Button
            variant="outlined"
            sx={{ textTransform: "capitalize", borderRadius: 4 }}
            onClick={() => {}}
          >
            Learn More
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default Services;
