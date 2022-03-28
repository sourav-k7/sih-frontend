import { Box, Typography, Button } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as NationalEmblem } from "../../Assets/nationalEmblem.svg";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/user";

const Navbar = () => {
	const navigate = useNavigate();
	const { userState, logout } = useContext(UserContext);
	const { token } = userState;

	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "space-around",
				width: "100%",
				height: "5rem",
				position: "fixed",
				top: 0,
				zIndex: 3,
				backgroundColor: "white",
			}}
			component="nav"
		>
			<Link to="/" style={{ textDecoration: "none", color: "black" }}>
				<section
					style={{
						textAlign: "start",
						display: "flex",
						alignItems: "center",
						alignContent: "center",
						gap: "1em",
						fontSize: 16,
						fontWeight: 400,
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
			</Link>
			<section>
				<Box
					sx={{
						display: "flex",
						gap: "2rem",
						height: "100%",
						alignItems: "center",
						cursor: "pointer",
					}}
					mr={4}
				>
					<Link
						to="/"
						style={{
							textDecoration: "none",
							color: "black",
							fontWeight: 400,
							fontSize: 16,
						}}
					>
						Home
					</Link>
					<Link
						to="/"
						style={{
							textDecoration: "none",
							color: "black",
							fontWeight: 400,
							fontSize: 16,
						}}
					>
						About us
					</Link>
					<Link
						to="/"
						style={{
							textDecoration: "none",
							color: "black",
							fontWeight: 400,
							fontSize: 16,
						}}
					>
						Contact us
					</Link>
					{!token ? (
						<Button
							onClick={() => {
								navigate("/login");
							}}
							variant="contained"
							sx={{
								fontSize: 14,
								color: "white",
								backgroundColor: (theme) =>
									theme.palette.primary.main,
							}}
						>
							Login
						</Button>
					) : (
						<Button variant="outlined" onClick={logout}>
							Logout
						</Button>
					)}
				</Box>
			</section>
		</Box>
	);
};

export default Navbar;
