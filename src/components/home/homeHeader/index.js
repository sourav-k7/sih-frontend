import { Typography, Box } from "@mui/material";
import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as HeaderImage } from "../../../Assets/headerImage.svg";
import {UserContext} from '../../../context/user';

const HomeHeader = () => {
  const {userState} = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        height: "30rem",
      }}
    >
      <HeaderImage />
      <Box
        sx={{
          height: "100%",
          width: "50%",
          display: "grid",
          placeItems: "center",
          placeContent: "center",
          gap: 4,
        }}
      >
        <Typography
          variant="h4"
          sx={{ width: "75%", textAlign: "center", fontSize: 32 }}
        >
          The New Way Of{" "}
          <Box component="span" sx={{ color: "#FF725E" }}>
            Managing Documents
          </Box>
        </Typography>
        {!userState.token && <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            sx={{ color: "white" }}
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </Button>
          <Button variant="outlined">Register</Button>
        </Box>}
      </Box>
    </Box>
  );
};

export default HomeHeader;
