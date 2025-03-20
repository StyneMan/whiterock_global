import { Box, IconButton, Toolbar } from "@mui/material";
import React from "react";
import { Grid } from "@mui/material";
import ContactForm from "../../contact/contact-form";
import CustomContainer from "../../../compoonents/container";
import fbImage from "../../../assets/images/facebook.svg";
import xImage from "../../../assets/images/x.svg";
import instagramImage from "../../../assets/images/instagram.svg";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <Box>
      <CustomContainer>
        <Toolbar />
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={7} color={"black"}>
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
              style={{
                color: "black",
                width: "90%",
              }}
            >
              At Whiterock Global Travels, we prioritize personalized service,
              reliability, and excellence to help you achieve your dreams—be it
              through education, business ventures, or world-class travel
              experiences.
              <br />
            </motion.p>
            <Toolbar />
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Find Us
            </motion.p>
            <Box
              ml={-1}
              width={"70%"}
              display="flex"
              flexDirection="row"
              justifyContent="start"
              alignItems="center"
            >
              <IconButton>
                <motion.img
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2, duration: 0.5 },
                  }}
                  viewport={{ once: false, amount: 0.5 }}
                  alt=""
                  src={xImage}
                />
              </IconButton>
              <IconButton>
                <motion.img
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2, duration: 0.5 },
                  }}
                  viewport={{ once: false, amount: 0.5 }}
                  alt=""
                  src={fbImage}
                />
              </IconButton>
              <IconButton>
                <motion.img
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2, duration: 0.5 },
                  }}
                  viewport={{ once: false, amount: 0.5 }}
                  alt=""
                  src={instagramImage}
                />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={5}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <ContactForm />
            </motion.div>
          </Grid>
        </Grid>
        <Toolbar />
      </CustomContainer>
    </Box>
  );
};

export default ContactSection;
