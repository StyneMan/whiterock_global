import {
  Box,
  Button,
  Grid,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import ContactForm from "./contact-form";
import { motion } from "framer-motion";
import image from "../../assets/images/about-img.png";
import CustomContainer from "../../compoonents/container";

import emailIcon from "../../assets/images/email_support_icon.svg";
import officeIcon from "../../assets/images/office_support_icon.svg";
import phoneIcon from "../../assets/images/phone_support_icon.svg";

const ContactUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box width={"100%"}>
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
            Contact
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
            Contact Us
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
            We'd love to hear from you! Whether you have questions about our
            programs, need assistance with planning your next adventure, or want
            to provide feedback, feel free to get in touch.
          </motion.p>
        </Box>
        <Toolbar />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={7}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: false, amount: 0.5 }}
              style={{
                padding: 10,
                width: "90%",
                height: 360,
                borderRadius: 8,
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={5}>
            <ContactForm />
          </Grid>
        </Grid>
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
          <Box
            component={Button}
            disableRipple
            disableTouchRipple
            sx={{
              textTransform: "none",
              border: "1px solid",
              borderRadius: 30,
              paddingTop: 0.75,
              paddingBottom: 0.75,
              paddingRight: 1,
              paddingLeft: 1,
              fontSize: 14,
              color: "black",
            }}
          >
            Reach out to us
          </Box>
          <p style={{ fontSize: 20, fontWeight: 500 }}>
            We’d Love to hear from you
          </p>
          <p>
            You can reach out to us manually on
            contact@whiterockglobaltravels.com
          </p>
        </motion.div>
        <Box p={2} />
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={4}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <SupportItem
                value="email@info.io"
                icon={emailIcon}
                title="Email Support"
                excerpt="Our team responds quickly"
              />
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <SupportItem
                value="London, UK"
                icon={officeIcon}
                title="Visit Our Office"
                excerpt="Plot 2, Road 3. Avenue X"
              />
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <SupportItem
                value="+44 793 4737938"
                icon={phoneIcon}
                title="Call Us Directly"
                excerpt="24/7 available"
              />
            </motion.div>
          </Grid>
        </Grid>
      </CustomContainer>
      <Toolbar />
    </Box>
  );
};

const SupportItem = ({ value, icon, title, excerpt }: any) => {
  return (
    <div>
      <img alt="" src={icon} />
      <h5>{title}</h5>
      <span>{excerpt}</span>
      <br />
      <a>{value}</a>
    </div>
  );
};

export default ContactUs;
