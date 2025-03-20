import {
  Avatar,
  Box,
  Card,
  Grid,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import CustomContainer from "../../../compoonents/container";
import { motion } from "framer-motion";

const stubTeam = [
  {
    name: "John Doe",
    position: "Engineer",
    description: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    socials: [
      {
        name: "facebook",
        icon: "",
        link: "",
      },
      {
        name: "facebook",
        icon: "",
        link: "",
      },
      {
        name: "facebook",
        icon: "",
        link: "",
      },
    ],
  },
  {
    name: "Jane Doe",
    position: "Stylist",
    description: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    socials: [
      {
        name: "facebook",
        icon: "",
        link: "",
      },
      {
        name: "facebook",
        icon: "",
        link: "",
      },
    ],
  },
  {
    name: "Jane Doe",
    position: "Stylist",
    description: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    socials: [
      {
        name: "facebook",
        icon: "",
        link: "",
      },
      {
        name: "facebook",
        icon: "",
        link: "",
      },
    ],
  },
  {
    name: "John Doe",
    position: "Engineer",
    description: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    socials: [
      {
        name: "facebook",
        icon: "",
        link: "",
      },
      {
        name: "facebook",
        icon: "",
        link: "",
      },
      {
        name: "facebook",
        icon: "",
        link: "",
      },
    ],
  },
  {
    name: "John Doe",
    position: "Engineer",
    description: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    socials: [
      {
        name: "facebook",
        icon: "",
        link: "",
      },
      {
        name: "facebook",
        icon: "",
        link: "",
      },
      {
        name: "facebook",
        icon: "",
        link: "",
      },
    ],
  },
];

const MeetOurTeam = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box bgcolor="#F9FAFB">
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
            Team
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
            Meet Our Team
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
            Our philosophy is simple — hire a team of diverse, passionate people
            and foster a culture that empowers you to do you best work.
          </motion.p>
          <Toolbar />
          <Grid container spacing={4}>
            {stubTeam?.map((elem, index: number) => (
              <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2, duration: 0.5 },
                  }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  <TeamCard item={elem} />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </CustomContainer>
      <Toolbar />
    </Box>
  );
};

const TeamCard = ({ item }: any) => {
  return (
    <Card elevation={0}>
      <Box
        py={5}
        px={2}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"start"}
        alignItems={"center"}
      >
        <Avatar variant="circular" sx={{ width: 70, height: 70 }}>
          JD
        </Avatar>
        <Box p={1} />
        <Typography
          py={1}
          sx={{ color: "#101828", fontSize: 18, fontWeight: 500 }}
        >
          {item?.name}
        </Typography>
        <Typography
          sx={(theme) => ({
            color: theme.palette.primary.dark,
            display: "flex",
            fontSize: 15,
            marginTop: -1,
            justifyContent: "center",
          })}
        >
          {item?.position}
        </Typography>
        <Typography
          py={1}
          sx={{
            color: "#667085",
            fontSize: 14,
            fontWeight: 400,
            textAlign: "center",
          }}
        >
          {item?.description}
        </Typography>
      </Box>
    </Card>
  );
};

export default MeetOurTeam;
