import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { BsSearch } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import NewApplicationDialog from "./newApplication";
import ApplicationList from "./applicationList";

const useStyle = makeStyles({
  unselected: {
    opacity: 0.5,
  },
});


const MyApplicationPage = () => {
  const classes = useStyle();
  const [newApplicationDialog, setNewApplicationDialog] = useState(false);
  const [selectedApplicationType, setSelectedApplicationType] = useState(0);
  const applicationType = [
    "Leave Application",
    "XYZ Application",
    "XYZ Application",
    "XYZ Application",
  ];
  return (
    <Container maxWidth="lg" sx={{ mt: 2 }}>
      <Box display="flex" justifyContent={"space-between"}>
        <Typography
          variant="h4"
          fontWeight={700}
          gutterBottom
          sx={{
            display: "inline",
            borderBottom: (theme) => `3px solid ${theme.palette.primary.main}`,
          }}
        >
          MY APPLICATIONS
        </Typography>
        <TextField
          variant="outlined"
          sx={{ width: "48%" }}
          placeholder="Search Document"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <BsSearch />
              </InputAdornment>
            ),
          }}
        />
        <Box display={"flex"} alignItems="center">
          <Typography variant="body1" fontWeight={700}>
            Hello, John
          </Typography>
          &emsp;
          <Avatar sx={{ bgcolor: (theme) => theme.palette.primary.main }} />
        </Box>
      </Box>
      <Grid container mt={4} spacing={2}>
        <Grid item xs={3}>
          <Box
            sx={{
              borderRadius: "10px",
              backgroundImage: "linear-gradient(0deg,#FF725E ,#FFB4A9)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 1,
            }}
          >
            <Box
              display="flex"
              alignItems={"center"}
              sx={{ cursor: "pointer" }}
              onClick={() => {
                setNewApplicationDialog(true)
              }}
            >
              <AiFillPlusCircle
                color="white"
                style={{ marginBottom: "10px" }}
                fontSize="50px"
              />
              <Typography variant="h6" gutterBottom component="div">
                Create Application
              </Typography>
            </Box>
            {applicationType.map((detail, index) => (
              <Card
                key={index}
                sx={{
                  width: "90%",
                  margin: "5px auto",
                  backgroundColor: "black",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={() => setSelectedApplicationType(index)}
                className={
                  selectedApplicationType === index ? "" : classes.unselected
                }
              >
                <CardContent>{detail}</CardContent>
              </Card>
            ))}
          </Box>
        </Grid>
        <Grid item xs={9}>
         <ApplicationList />
        </Grid>
      </Grid>
      <NewApplicationDialog
        open={newApplicationDialog}
        handleClose={() => setNewApplicationDialog(false)}
      />
    </Container>
  );
};
export default MyApplicationPage;
