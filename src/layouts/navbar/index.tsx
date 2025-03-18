import { useMediaQuery, useTheme } from "@mui/material";
import MobileNavbar from "./mobile_navbar";
import MainNavbar from "./main_navbar";
// import { JSX } from "react";


const AppNavbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   const childrenElement: JSX.Element = <Box bgcolor={"red"}></Box>;

  // Define the props object to be passed to ElevateAppBar
//   const appBarProps: AppBarProps = {
//     children: childrenElement,
//   };


  if (!isMobile) return <MainNavbar  />;

  return <MobileNavbar />;
};

export default AppNavbar;
