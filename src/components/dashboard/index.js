import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { IoMdAddCircle } from "react-icons/io";
import { useContext, useState } from "react";
import withMainLayout from "../../layout/withMainLayout";
import ApplicationList from "../myapplication/applicationList";
import { UserContext } from "../../context/user";
import NewApplicationDialog from "../myapplication/newApplication";

const Dashboard = () => {
  const [selectedApplicationType, setSelectedApplicationType] = useState(0);
  const [openNewApplication, setOpenNewApplication] = useState(false);
  const { userState } = useContext(UserContext);
  const { receivedApplication } = userState;
  const applicationType = ["Leave Application",'other'];
  return (
    <Container maxWidth="lg" sx={{ mt: 2 }}>
      <Grid container mt={4} spacing={2}>
        <Grid item xs={3}>
          <Box
            sx={{
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
           
            <Button
              variant="contained"
              startIcon={<IoMdAddCircle />}
              onClick={() => setOpenNewApplication(true)}
              sx={{ color: "white", my: 1, width: "88%", p: 1 }}
            >
              Create Application
            </Button>
            {applicationType.map((detail, index) => (
              <Card
                key={index}
                sx={
                   {
                        width: "90%",
                        margin: "5px auto",
                        color: "white",
                        border: 1,
                        backgroundColor:selectedApplicationType === index
                        ? (theme) => theme.palette.primary.main:'gray',
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
      <NewApplicationDialog
        open={openNewApplication}
        handleClose={() => setOpenNewApplication(false)}
      />
    </Container>
  );
};
export const DashboardLayout = withMainLayout(Dashboard);
