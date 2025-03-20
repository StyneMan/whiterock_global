import {
  Box,
} from "@mui/material";
import WhoWeAre from "./sections/who_we_are";
import MeetOurTeam from "./sections/team";


const AboutUs = () => {
 

  return (
    <Box width={"100%"}>
     <WhoWeAre />
     <MeetOurTeam />
    </Box>
  );
};

export default AboutUs;
