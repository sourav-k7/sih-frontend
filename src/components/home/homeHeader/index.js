import { Typography } from "@mui/material";
import { Box, height } from "@mui/system";
import { Button } from "@mui/material";
import React from "react";
import { ReactComponent as HeaderImage } from "../../../Assets/headerImage.svg";
const HomeHeader = () => {
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
				<Box sx={{ display: "flex", gap: 2 }}>
					<Button variant="contained" sx={{ color: "white" }}>
						Login
					</Button>
					<Button variant="outlined">Register</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default HomeHeader;
