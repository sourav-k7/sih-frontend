import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useContext, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { UserContext } from "../../context/user";
import ProfileData from "./profileData";
import ServiceBook from "./serviceBook";
import withMainLayout from "../../layout/withMainLayout";
import ApplicationList from "../myapplication/applicationList";
<<<<<<< HEAD
import SalarySlip from "./salarySlip";
=======
import NewApplicationDialog from "../myapplication/newApplication";
>>>>>>> f65077267e7794937b8421a3690d5b02f9cc09da

const useStyle = makeStyles({
  unselected: {
    opacity: 0.5,
  },
});

const ProfilePage = () => {
<<<<<<< HEAD
	const { userState } = useContext(UserContext);
	const [selectedTab, setSelectedTab] = useState(0);
	const navigate = useNavigate();
	const tabList = [
		"My Applications",
		"Your Profile",
		"Salary Slip",
		"Service Book",
	];

	function handleComponent(ind) {
		if (ind === 0) {
			return <ApplicationList dataList={userState.sentApplication} />;
		} else if (ind === 1) {
			return <ProfileData />;
		} else if (ind === 3) {
			return <ServiceBook />;
		} else if (ind === 2) {
			return <SalarySlip />;
		} else {
			return (
				<>
					<Skeleton animation={false} sx={{ height: "90%" }} />
					<Button
						size="large"
						variant="contained"
						sx={{ color: "white" }}
						onClick={() => navigate("/my-application")}
					>
						Go to My Applications
					</Button>
				</>
			);
		}
	}

	const classes = useStyle();
	return (
		<Container maxWidth="lg">
			<Grid container spacing={4} marginTop={"30px"}>
				<Grid item xs={3.5}>
					<Box
						sx={{
							borderRadius: "10px",
							backgroundImage:
								"linear-gradient(0deg,#FF725E ,#FFB4A9)",
							position: "relative",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							paddingBottom: "2rem",
						}}
					>
						<Avatar
							alt="Profile pic"
							sx={{
								width: 75,
								height: 75,
								position: "absolute",
								top: "-40px",
							}}
						/>

						<Typography
							variant="h5"
							gutterBottom
							component="div"
							marginTop={"3rem"}
						>
							{userState.name}
						</Typography>
						<Typography
							variant="subtitle2"
							color={"text.secondary"}
							gutterBottom
							sx={{ wordWrap: "break-word" }}
							component="div"
						>
							{userState.department}
						</Typography>
						{tabList.map((detail, index) => (
							<Card
								key={index}
								sx={{
									width: "16rem",
									margin: "5px auto",
									backgroundColor: "black",
									color: "white",
									cursor: "pointer",
									display: "flex",
									alignContent: "center",
									alignItems: "center",
									padding: "10px",
								}}
								onClick={() => setSelectedTab(index)}
								className={
									selectedTab === index
										? ""
										: classes.unselected
								}
							>
								{selectedTab === index && (
									<div
										style={{
											borderRadius: "50%",
											backgroundColor: "white",
											height: "10px",
											width: "10px",
										}}
									></div>
								)}

								<CardContent>{detail}</CardContent>
							</Card>
						))}
					</Box>
				</Grid>
				<Grid item xs={8}>
					{handleComponent(selectedTab)}
				</Grid>
			</Grid>
		</Container>
	);
=======
  const { userState } = useContext(UserContext);
  const [selectedTab, setSelectedTab] = useState(0);
  const [openNewApplication, setOpenNewApplication] = useState(false);
  const tabList = [
    "My Applications",
    "Your Profile",
    "Salary Slip",
    "Service Book",
  ];

  function handleComponent(ind) {
    if (ind === 0) {
		let data = [];
		if(userState?.sentApplication){
			data = [...userState?.sentApplication];
		}
      return (
        <ApplicationList dataList={data?.reverse()} />
      );
    } else if (ind === 1) {
      return <ProfileData />;
    } else if (ind === 3) {
      return <ServiceBook />;
    } else {
      return <Skeleton animation={false} sx={{ height: "100%" }} />;
    }
  }

  const classes = useStyle();
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} marginTop={"30px"}>
        <Grid item xs={3.5}>
          <Box
            sx={{
              borderRadius: "10px",
              backgroundImage: "linear-gradient(0deg,#FF725E ,#FFB4A9)",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <Avatar
              alt="Profile pic"
              sx={{
                width: 60,
                height: 60,
                position: "absolute",
                top: "-30px",
              }}
            />

            <Typography
              variant="h5"
              gutterBottom
              component="div"
              marginTop={"30px"}
            >
              {userState.name}
            </Typography>
            <Typography
              variant="subtitle2"
              color={"text.secondary"}
              gutterBottom
              sx={{ wordWrap: "break-word" }}
              component="div"
            >
              {userState.department}
            </Typography>
            <Button
              variant="contained"
              sx={{ color: "white", my: 1, p: 1 }}
              startIcon={<IoMdAddCircle />}
              onClick={() => setOpenNewApplication(true)}
              fullWidth
            >
              Create Application
            </Button>
            {tabList.map((detail, index) => (
              <Card
                key={index}
                sx={{
                  width: "95%",
                  margin: "5px auto",
                  backgroundColor: "black",
                  color: "white",
                  cursor: "pointer",
                  display: "flex",
                  alignContent: "center",
                  alignItems: "center",
                  padding: "10px",
                }}
                onClick={() => setSelectedTab(index)}
                className={selectedTab === index ? "" : classes.unselected}
              >
                {selectedTab === index && (
                  <div
                    style={{
                      borderRadius: "50%",
                      backgroundColor: "white",
                      height: "10px",
                      width: "10px",
                    }}
                  ></div>
                )}

                <CardContent>{detail}</CardContent>
              </Card>
            ))}
          </Box>
        </Grid>
        <Grid item xs={8}>
          {handleComponent(selectedTab)}
        </Grid>
      </Grid>
      <NewApplicationDialog
        open={openNewApplication}
        handleClose={() => setOpenNewApplication(false)}
      />
    </Container>
  );
>>>>>>> f65077267e7794937b8421a3690d5b02f9cc09da
};

export const ProfilePageLayout = withMainLayout(ProfilePage);
