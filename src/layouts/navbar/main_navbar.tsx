import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import { NavLink, useNavigate } from "react-router-dom";
import "./nav.css";
import { Logo } from "../../compoonents/logo";
import { Typography } from "@mui/material";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactElement<{ elevation?: number }>;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return children
    ? React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
        style: trigger
          ? {
              borderRadius: 1,
              backgroundColor: "rgba(255, 255, 255, 0.75)",
              border: "1px solid rgba(255, 255, 255, 0.92);",
              backdropFilter: "blur(7px) saturate(180%)",
              WebkitBackdropFilter: "blur(7px) saturate(180%)",
            }
          : null,
      })
    : null;
}

export default function MainNavbar(props: Props) {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar sx={{ bgcolor: "white", color: "black" }}>
          <Toolbar sx={{ position: "relative" }}>
            <div 
              onClick={() => navigate("/")}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "center",
                position: 'absolute'
              }}
            >
              <Logo isSingle />
              <Typography
                sx={{ color: "black", fontSize: 16, fontWeight: 600 }}
              >
                WhiteRock Global Travels
              </Typography>
            </div>
            <Box
              display="flex"
              width={"100%"}
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              alignSelf={"center"}
              color={"black"}
              sx={{ margin: "0px auto;" }}
            >
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : "pending"
                }
                style={{
                  marginLeft: 6,
                  marginRight: 6,
                }}
              >
                Home
              </NavLink>

              <NavLink
                to="/services"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : "pending"
                }
                style={{
                  marginLeft: 6,
                  marginRight: 6,
                }}
              >
                Services
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : "pending"
                }
                style={{
                  marginLeft: 6,
                  marginRight: 6,
                }}
              >
                About
              </NavLink>

              <NavLink
                to="/programs"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : "pending"
                }
                style={{
                  marginLeft: 6,
                  marginRight: 6,
                }}
              >
                Programs
              </NavLink>

              <NavLink
                to="/contact-us"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : "pending"
                }
                style={{
                  marginLeft: 6,
                  marginRight: 6,
                  font: "Urbanist",
                  fontSize: 16,
                  fontWeight: 400,
                }}
              >
                Contact
              </NavLink>

              <NavLink
                to="/events"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : "pending"
                }
                style={{
                  marginLeft: 6,
                  marginRight: 6,
                  font: "Urbanist",
                  fontSize: 16,
                  fontWeight: 400,
                }}
              >
                Events
              </NavLink>
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}
