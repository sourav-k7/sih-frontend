import { Grid, Typography, Paper, Box, Container } from "@mui/material";
import { styled } from "@mui/system";

import React from "react";

const FootBar = () => {
	const footBarContents = [
		{
			name: "Terms and Conditions",
		},
		{
			name: "Copyright Policy",
		},
		{
			name: "LinkedIn",
		},
		{
			name: "Privacy Policy",
		},
		{
			name: "Accessibility Info",
		},
		{
			name: "Twitter",
		},
		{
			name: "Disclaimer",
		},
		{
			name: "Feedback",
		},
		{
			name: "Aarogya Setu",
		},
	];

	return (
		<Box
			sx={{
				position: "relative",
				bottom: 0,
				height: "16rem",
				backgroundColor: "#302928",
				width: "100%",
				display: "grid",
			}}
		>
			<Grid container coloumns={{ md: 3 }} sx={{ color: "white" }} my={2}>
				{footBarContents.map((content, index) => (
					<Grid
						item
						xs={4}
						key={index}
						sx={{ placeContent: "center", cursor: "pointer" }}
					>
						<Box
							sx={{
								fontSize: 12,
								border: 0,
								backgroundColor: "#302928",
								padding: "1em",
								textAlign: "center",
								color: "white",
								border: "0",
							}}
						>
							{content.name}
						</Box>
					</Grid>
				))}
			</Grid>
			<Typography
				varient="body1"
				sx={{
					textAlign: "center",
					color: "white",
					fontSize: 14,
					width: "66.6%",
					placeSelf: "center",
				}}
				my={4}
			>
				Website Content Owned by{" "}
				<Box component="span" sx={{ color: "#FF725E" }}>
					Department of Empowerment of Persons with Disabilities
				</Box>
				, Ministry of Social Justice Hosted by National Informatics
				Centre (NIC)
			</Typography>
		</Box>
	);
};

export default FootBar;
