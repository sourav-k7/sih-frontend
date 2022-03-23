import styled from "@emotion/styled";
import {
	Container,
	Box,
	Typography,
	List,
	ListItem,
	ListItemText,
	ListItemButton,
	Button,
} from "@mui/material";
import { display, maxWidth, width } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as NationalEmblem } from "../../Assets/nationalEmblem.svg";

const Navbar = () => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "space-between",
				width: "100%",
				height: "5rem",
				position: "fixed",
				top: 0,
				zIndex: 3,
			}}
			component="nav"
		>
			<section
				style={{
					textAlign: "start",
					display: "flex",
					alignItems: "center",
					alignContent: "center",
					gap: "1em",
					fontSize: 16,
					fontWeight: 500,
				}}
			>
				<NationalEmblem />
				<Typography
					variant="h7"
					style={{ width: "36%", wordWrap: "break-word" }}
				>
					Government of India Ministry of Social Justice and
					Empowerment
				</Typography>
			</section>
			<section>
				<Box
					sx={{
						display: "flex",
						gap: "2rem",
						height: "100%",
						alignItems: "center",
						cursor: "pointer",
						fontSize: 12,
					}}
					mr={4}
				>
					<Typography varient="h2" sx={{ fontSize: 14 }}>
						Home
					</Typography>

					<Typography varient="h2" sx={{ fontSize: 14 }}>
						About us
					</Typography>
					<Typography varient="h2" sx={{ fontSize: 14 }}>
						Contact us
					</Typography>
					<Button
						variant="contained"
						sx={{
							fontSize: 14,
							color: "white",
							backgroundColor: "#FF725E",
							height: "1.25rem",
						}}
					>
						Login
					</Button>
				</Box>
			</section>
		</Box>
	);
};

export default Navbar;
