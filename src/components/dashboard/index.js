import {
	Avatar,
	Box,
	Card,
	CardContent,
	Container,
	Grid,
	InputAdornment,
	Tab,
	tabClasses,
	Tabs,
	TextField,
	Typography,
} from "@mui/material";
import { BsSearch } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { styled } from "@mui/system";
import withMainLayout from "../../layout/withMainLayout";
// import { ReactComponent as Plus } from "../../Assets/plus.svg";

const useStyle = makeStyles({
	unselected: {
		opacity: 0.5,
	},
});

const StyledTab = styled(Tab)`
	color: white;
	cursor: pointer;
	font-size: 0.875rem;
	font-weight: bold;
	width: 100%;
	border: none;
	border-radius: 5px;
	display: flex;
	justify-content: center;

	&.${tabClasses.selected} {
		color: white;
	}
`;

const TabBar = styled(Tabs)`
	border-radius: 8px;
	margin-bottom: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	align-content: space-between;
`;

const Dashboard = () => {
	const classes = useStyle();
	const [selectedApplicationType, setSelectedApplicationType] = useState(0);
	const applicationType = [
		"Leave Application",
		"XYZ Application",
		"XYZ Application",
		"XYZ Application",
	];
	const [currentTab, setCurrentTab] = useState("Approved");
	return (
		<Container maxWidth="lg" sx={{ mt: 2 }}>
			<Box display="flex" justifyContent={"space-between"}>
				<Typography
					variant="h4"
					fontWeight={700}
					gutterBottom
					sx={{
						display: "inline",
						borderBottom: (theme) =>
							`3px solid ${theme.palette.primary.main}`,
					}}
				>
					Dashboard
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
					<Avatar
						sx={{ bgcolor: (theme) => theme.palette.primary.main }}
					/>
				</Box>
			</Box>
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
												backgroundColor: (theme) =>
													theme.palette.primary.main,
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
								onClick={() =>
									setSelectedApplicationType(index)
								}
							>
								<CardContent>{detail}</CardContent>
							</Card>
						))}
					</Box>
				</Grid>
				<Grid item xs={9}>
					<TabBar
						value={currentTab}
						onChange={(e, newValue) => setCurrentTab(newValue)}
						variant="fullWidth"
						color="white"
						indicatorColor="transparent"
					>
						<StyledTab
							value="Approved"
							label="Approved"
							sx={{ backgroundColor: "#00C337" }}
						/>
						<StyledTab
							value="Rejected"
							label="Rejected"
							sx={{ backgroundColor: "rgba(254, 60, 32, 0.8)" }}
						/>
						<StyledTab
							value="Pending"
							label="Pending"
							sx={{ backgroundColor: "rgba(255, 138, 52, 1)" }}
						/>
					</TabBar>
				</Grid>
			</Grid>
		</Container>
	);
};
export const DashboardLayout = withMainLayout(Dashboard);
