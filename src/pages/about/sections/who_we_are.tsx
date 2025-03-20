import {
  Box,
  Grid,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import CustomContainer from "../../../compoonents/container";
import image from "../../../assets/images/about-img.png";
import centricIcon from "../../../assets/images/centric_icon.svg";
import excellenceIcon from "../../../assets/images/excellence_icon.svg";
import innovationIcon from "../../../assets/images/innovation_icon.svg";
import integrityIcon from "../../../assets/images/integrity_icon.svg";
import personalizeIcon from "../../../assets/images/personalize_icon.svg";
import { motion } from "framer-motion";

const coreValues = [
  {
    title: "Global Connectivity",
    icon: centricIcon,
    description:
      "We bridge opportunities across borders, helping clients explore, learn, and grow globally.",
  },
  {
    title: "Integrity & Trust",
    icon: integrityIcon,
    description:
      "We bridge opportunities across borders, helping clients explore, learn, and grow globally.",
  },
  {
    title: "Innovation",
    icon: innovationIcon,
    description:
      "We bridge opportunities across borders, helping clients explore, learn, and grow globally.",
  },
  {
    title: "Personalization",
    icon: personalizeIcon,
    description:
      "We bridge opportunities across borders, helping clients explore, learn, and grow globally.",
  },
];

const WhoWeAre = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      <Toolbar />
      <CustomContainer>
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
            About Us
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
            Who we are
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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.5 },
          }}
          viewport={{ once: false, amount: 0.5 }}
          style={{
            padding: isMobile ? 21 : 32,
            borderRadius: 16,
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Box
                p={2}
                height={200}
                display={"flex"}
                alignItems={"center"}
                flexDirection={"column"}
                justifyContent={"center"}
                sx={{
                  borderRadius: 1,
                  backgroundColor: "rgba(255, 255, 255, 0.75)",
                  border: "1px solid rgba(255, 255, 255, 0.92);",
                  backdropFilter: "blur(7px) saturate(180%)",
                  WebkitBackdropFilter: "blur(7px) saturate(180%)",
                }}
              >
                <div style={{ color: "black" }}>
                  <Typography
                    fontSize={56}
                    fontWeight={600}
                    textAlign={"center"}
                    gutterBottom
                  >
                    400+
                  </Typography>

                  <Typography
                    sx={{ fontSize: 16, fontWeight: 700 }}
                    textAlign={"center"}
                  >
                    Programs
                  </Typography>

                  <Typography fontSize={13} textAlign={"center"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus debitis aliquam illo at asperiores minus quo.
                  </Typography>
                </div>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Box
                p={2}
                height={200}
                display={"flex"}
                alignItems={"center"}
                flexDirection={"column"}
                justifyContent={"center"}
                sx={{
                  borderRadius: 1,
                  backgroundColor: "rgba(255, 255, 255, 0.75)",
                  border: " 1px solid rgba(255, 255, 255, 0.125);",
                  backdropFilter: "blur(16px) saturate(180%)",
                  WebkitBackdropFilter: "blur(16px) saturate(180%)",
                }}
              >
                <div style={{ color: "black" }}>
                  <Typography
                    fontSize={56}
                    fontWeight={600}
                    textAlign={"center"}
                    gutterBottom
                  >
                    10+
                  </Typography>

                  <Typography
                    sx={{ fontSize: 16, fontWeight: 700 }}
                    textAlign={"center"}
                  >
                    Services
                  </Typography>

                  <Typography fontSize={13} textAlign={"center"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus debitis aliquam. hjhj jhjh jh jhbjhj
                  </Typography>
                </div>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Box
                p={2}
                height={200}
                display={"flex"}
                alignItems={"center"}
                flexDirection={"column"}
                justifyContent={"center"}
                sx={{
                  borderRadius: 1,
                  backgroundColor: "rgba(255, 255, 255, 0.75)",
                  border: " 1px solid rgba(255, 255, 255, 0.125);",
                  backdropFilter: "blur(16px) saturate(180%)",
                  WebkitBackdropFilter: "blur(16px) saturate(180%)",
                }}
              >
                <div>
                  <Typography fontSize={56} fontWeight={600}>
                    400+
                  </Typography>

                  <Typography sx={{ fontSize: 16, fontWeight: 700 }}>
                    Programs
                  </Typography>

                  <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus debitis aliquam illo at asperiores minus quo.
                  </Typography>
                </div>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
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
            Our Vision
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
            Shaping Futures, Connecting Worlds
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
            To be a globally recognized leader in education, business, and
            travel services, empowering individuals with opportunities that
            enrich lives and broaden horizons
          </motion.p>
        </Box>
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
            Our Values
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
            Shaping Futures, Connecting Worlds
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
            To be a globally recognized leader in education, business, and
            travel services, empowering individuals with opportunities that
            enrich lives and broaden horizons
          </motion.p>
        </Box>
        <Toolbar />
        <Grid container spacing={2}>
          {coreValues?.map((elem) => (
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"start"}
                alignItems={"center"}
              >
                <img alt="" src={elem?.icon} />
                <p style={{ fontSize: 18, fontWeight: 500 }}>{elem?.title}</p>
                <span
                  style={{ fontSize: 14, fontWeight: 400, textAlign: "center" }}
                >
                  {elem?.description}
                </span>
              </Box>
            </Grid>
          ))}
        </Grid>
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
            Our Mission
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 0.5 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            style={{ width: "40%", textAlign: "center" }}
          >
            Guiding You to New Opportunities and Unforgettable Experiences
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
            At Whiterock Global Travels, our mission is to provide exceptional
            international education, business, and travel services. We are
            committed to guiding individuals toward academic and professional
            growth, crafting seamless travel experiences, and connecting people
            with opportunities that inspire and transform their futures
          </motion.p>
        </Box>
      </CustomContainer>
      <Toolbar />
    </Box>
  );
};

export default WhoWeAre;
