import { Container, Typography, Grid } from "@mui/material";
import { borderColor, Box, display, width } from "@mui/system";
import React from "react";
import { ReactComponent as Create } from "../../../Assets/create.svg";
import { ReactComponent as Report } from "../../../Assets/reports.svg";
import { ReactComponent as Time } from "../../../Assets/time.svg";

const Features = () => {
	const featuresContent = [
		{
			logo: <Create />,
			name: "Creation",
			disc: "You can create Customized documents",
		},
		{
			logo: <Time />,
			name: "Tracking",
			disc: "Track your documents process ",
		},
		{
			logo: <Report />,
			name: "Reports",
			disc: "Generate informative reports ",
		},
	];
	return (
		<Container>
			<Grid sx={{ placeItems: "center", display: "grid" }}>
				<Typography
					sx={{
						fontSize: 32,
						fontWeight: 500,
						borderBottom: 2,
						borderColor: "#FF725E",
					}}
				>
					Features
				</Typography>
				<Box
					container
					sx={{
						display: "flex",
						my: 4,
						width: "100%",
						justifyContent: "space-between",
					}}
					mr={10}
				>
					{featuresContent.map((content, index) => (
						<Box
							xs={4}
							key={index}
							sx={{ display: "grid", placeItems: "center" }}
						>
							{content.logo}
							<Typography
								varient="h2"
								sx={{ fontSize: 20, color: "#FF725E" }}
							>
								{content.name}
							</Typography>
							<Typography
								varient="h2"
								sx={{
									fontSize: 16,
									width: "50%",
									textAlign: "center",
								}}
							>
								{content.disc}
							</Typography>
						</Box>
					))}
				</Box>
			</Grid>
		</Container>
	);
};

export default Features;
