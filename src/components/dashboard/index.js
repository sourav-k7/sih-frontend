import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { AiFillPlusCircle } from "react-icons/ai";
import { useContext, useState } from "react";
import withMainLayout from "../../layout/withMainLayout";
import ApplicationList from "../myapplication/applicationList";
import { UserContext } from "../../context/user";

const Dashboard = () => {
  const [selectedApplicationType, setSelectedApplicationType] = useState(0);
  const { userState } = useContext(UserContext);
  const { receivedApplication } = userState;
  const applicationType = [
    "Leave Application",
    "XYZ Application",
    "XYZ Application",
    "XYZ Application",
  ];
  return (
    <Container maxWidth="lg" sx={{ mt: 2 }}>
      <Grid container mt={4} spacing={2}>
        <Grid item xs={3} sx={{ borderRight: 1, borderColor: "black" }}>
          <Box
            sx={{
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box display="flex" alignItems={"center"}>
              <AiFillPlusCircle
                color="white"
                style={{ marginBottom: "10px" }}
                fontSize="50px"
              />
              <Typography
                variant="h6"
                gutterBottom
                sx={{ textAlign: "center" }}
              >
                Create Application
              </Typography>
            </Box>
            {applicationType.map((detail, index) => (
              <Card
                key={index}
                sx={
                  selectedApplicationType === index
                    ? {
                        width: "90%",
                        margin: "5px auto",
                        color: "white",
                        border: 1,
                        backgroundColor: (theme) => theme.palette.primary.main,
                        textAlign: "center",
                        borderColor: "black",
                        cursor: "pointer",
                      }
                    : {
                        width: "90%",
                        margin: "5px auto",
                        color: "black",
                        border: 1,
                        backgroundColor: "color",
                        textAlign: "center",
                        borderColor: "black",
                        cursor: "pointer",
                      }
                }
                onClick={() => setSelectedApplicationType(index)}
              >
                <CardContent>{detail}</CardContent>
              </Card>
            ))}
          </Box>
        </Grid>
        <Grid item xs={9}>
          <ApplicationList
            dataList={[...(receivedApplication ?? [])].reverse()}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
export const DashboardLayout = withMainLayout(Dashboard);
