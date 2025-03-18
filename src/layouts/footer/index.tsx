import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { Iconify } from "../../compoonents/iconify";
import CustomContainer from "../../compoonents/container";

const Footer = () => {
  return (
    <Box bgcolor="#F7F7F7" py={5} width={"100vw"}>
      <Toolbar />
      <CustomContainer>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={5} lg={4}>
            <Box
              width="60%"
              display="flex"
              flexDirection="row"
              alignItems="start"
            >
              <img alt="" src="/logo.png" width={60} />
              <Typography
                pl={2}
                textAlign="start"
                color="black"
                fontWeight={700}
                fontSize={21}
              >
                WhiteRock Global Travels
              </Typography>
            </Box>
          </Grid>
          <Grid container spacing={2} item xs={12} sm={12} md={7} lg={8}>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <Typography fontSize={18} fontWeight={500} color="#000000">
                Quick Links
              </Typography>
              <Box p={2} />
              <Box display="flex" flexDirection="column" alignItems="start">
                <NavLink to={"/"} title="Home">
                  <span style={{ fontSize: 14, fontWeight: 400 }}>Home</span>
                </NavLink>
                <Box p={1} />
                <NavLink to={"/"} title="Home">
                  <span style={{ fontSize: 14, fontWeight: 400 }}>
                    Programs
                  </span>
                </NavLink>
                <Box p={1} />
                <NavLink to={"/"} title="Home">
                  <span style={{ fontSize: 14, fontWeight: 400 }}>
                    Services
                  </span>
                </NavLink>
                <Box p={1} />
                <NavLink to={"/"} title="Home">
                  <span style={{ fontSize: 14, fontWeight: 400 }}>Events</span>
                </NavLink>
                <Box p={1} />
                <NavLink to={"/"} title="Home">
                  <span style={{ fontSize: 14, fontWeight: 400 }}>
                    Contact Us
                  </span>
                </NavLink>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <Typography
                fontSize={18}
                fontWeight={500}
                color="#000000"
                width={"100%"}
              >
                Contact Info
              </Typography>
              <Box p={2} />
              <Box
                display="flex"
                flexDirection="column"
                alignItems="start"
                width={"100%"}
              >
                <NavLink to={"/"} title="Home">
                  <Box
                    display="flex"
                    flexDirection="row"
                    style={{ fontSize: 14, fontWeight: 400 }}
                  >
                    <Iconify icon="ion:call-outline" fontSize={14} />
                    <Typography
                      style={{ marginLeft: 10, fontSize: 14, fontWeight: 400 }}
                    >
                      +44 7538 123296
                    </Typography>
                  </Box>
                </NavLink>
                <Box p={1} />
                <NavLink to={"/"} title="Home">
                  <div style={{ fontSize: 14, fontWeight: 400 }}>
                    <Iconify icon="system-uicons:mail" fontSize={14} />
                    <Typography
                      style={{ marginLeft: 10, fontSize: 14, fontWeight: 400 }}
                    >
                      contact@email.com
                    </Typography>
                  </div>
                </NavLink>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography
                fontSize={18}
                fontWeight={500}
                color="#000000"
                width={"80%"}
              >
                Subscribe to our news letter for the latest updates
              </Typography>
              <Box p={1} />
              <Box
                display="flex"
                flexDirection="row"
                justifyContent={"start"}
                alignItems={"center"}
                borderRadius={21}
              >
                <TextField
                  fullWidth
                  variant="standard"
                  size="small"
                //   value={null}
                  onChange={(e) => {}}
                  placeholder={"Enter your emaill"}
                  sx={{
                    border: "none",
                    borderTopLeftRadius: 26,
                    borderBottomLeftRadius: 26,
                    bgcolor: "white",
                    px: 2,
                    py: 1,
                  }}
                  InputProps={{
                    disableUnderline: true,
                    style: {
                      color: "black",
                    },
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    px: 5,
                    py: 1,
                    textTransform: "capitalize",
                    borderTopRightRadius: 26,
                    borderBottomRightRadius: 26,
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Toolbar />
        <Divider />
      </CustomContainer>
    </Box>
  );
};

export default Footer;
