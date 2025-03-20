import {
  Box,
  Card,
  Grid,
  styled,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import CustomContainer from "../../../compoonents/container";
import "react-multi-carousel/lib/styles.css";

import { motion } from "framer-motion";

import "./testimonial.css";
import image from "../../../assets/images/why_us.png";

const list = [
  { id: 1, text: "Summer Program", author: "John Doe" },
  { id: 2, text: "Winter Program.", author: "Jane Smith" },
  { id: 3, text: "Summer Program", author: "John Doe" },
  { id: 4, text: "Winter Program.", author: "Jane Smith" },
  { id: 5, text: "Summer Program", author: "John Doe" },
  { id: 6, text: "Winter Program.", author: "Jane Smith" },
];

const CustomCard = styled(Card)(({ theme }) => ({
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    opacity: 0.3,
  },
}));

const OurPrograms = () => {
  const theme = useTheme();

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
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 0.5 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            style={{
              fontSize: 22,
              fontWeight: 600,
              marginTop: -4,
            }}
          >
            Our Programs
          </motion.h3>
        </Box>
        <Box p={2} />
        <Grid container spacing={4}>
          {list.map((elem) => (
            <Grid key={elem?.id} item xs={12} md={6} lg={4}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <CustomCard>
                  <img
                    src={image}
                    alt=""
                    style={{ height: 180, width: "100%" }}
                  />
                  <Box
                    sx={(theme) => ({
                      bgcolor: theme.palette.primary.dark,
                      display: "flex",
                      justifyContent: "center",
                      color: "white",
                    })}
                    py={1}
                    px={2}
                  >
                    <Typography>{elem.text}</Typography>
                  </Box>
                </CustomCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </CustomContainer>
      <Toolbar />
    </Box>
  );
};

const HoverImageCard = () => {};

export default OurPrograms;
