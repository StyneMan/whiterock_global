import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Iconify } from "../../compoonents/iconify";
import { Logo } from "../../compoonents/logo";
import { useNavigate } from "react-router-dom";
import { useScrollTrigger } from "@mui/material";

const drawerWidth = 280;
const navItems = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "Services",
    route: "/services",
  },
  {
    title: "About",
    route: "/about",
  },
  {
    title: "Programs",
    route: "/programs",
  },
  {
    title: "Contact",
    route: "/contact-us",
  },
  {
    title: "Events",
    route: "/events",
  },
];

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

export default function MobileNavbar(props: Props) {
  const { window } = props;
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Logo isSingle={false} />
      <Toolbar />
      <Box p={1} />
      <Divider />
      <Box p={1} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton
              sx={{ textAlign: "left" }}
              onClick={() => {
                handleDrawerToggle();
                // setMobileOpen((prevState) => !prevState);
                navigate(item?.route);
              }}
            >
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar component="nav" elevation={0} sx={{ bgcolor: "white" }}>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <div
                onClick={() => navigate("/")}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <Logo isSingle />
                <Typography
                  sx={{ color: "black", fontSize: 16, fontWeight: 600 }}
                >
                  WhiteRock Global Travels
                </Typography>
              </div>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, color: "black" }}
            >
              <Iconify icon={"tabler:menu-3"} fontSize={48} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
