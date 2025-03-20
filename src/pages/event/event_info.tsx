import { Box, Toolbar } from "@mui/material";
// import React from "react";
import CustomContainer from "../../compoonents/container";
import { useLocation } from "react-router-dom";

const EventInfo = () => {
  const location = useLocation();
  const { data } = location.state;

  return (
    <Box>
      <Toolbar />
      <CustomContainer>
        <img
          src={data?.image}
          style={{ borderRadius: 6 }}
          width={"100%"}
          height={320}
        />
        <Toolbar />
        <h5>{data?.title}</h5>
        <p>{data?.summary}</p>
      </CustomContainer>
      <Toolbar />
    </Box>
  );
};

export default EventInfo;
