import {
	Box,
	Typography,
	Button,
	IconButton,
	Avatar,
	Menu,
	MenuItem,
} from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as NationalEmblem } from "../../Assets/nationalEmblem.svg";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/user";

const Navbar = () => {
	const navigate = useNavigate();
	const { userState, logout } = useContext(UserContext);
	const { token } = userState;
	const [anchorEl, setAnchorEl] = React.useState(null);
	const openMenu = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
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
						<>
							<IconButton
								onClick={handleClick}
								aria-controls={
									openMenu ? "account-menu" : undefined
								}
								aria-haspopup="true"
								aria-expanded={openMenu ? "true" : undefined}
							>
								<Avatar
									alt="Profile pic"
									sx={{
										width: 40,
										height: 40,
									}}
								/>
							</IconButton>
							<Menu
								id="account-menu"
								anchorEl={anchorEl}
								open={openMenu}
								onClick={handleClose}
								onClose={handleClose}
								PaperProps={{
									elevation: 0,
									sx: {
										overflow: "visible",
										filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
										mt: 1.5,
										"& .MuiAvatar-root": {
											width: 32,
											height: 32,
											ml: -0.5,
											mr: 1,
										},
										"&:before": {
											content: '""',
											display: "block",
											position: "absolute",
											top: 0,
											right: 14,
											width: 10,
											height: 10,
											bgcolor: "background.paper",
											transform:
												"translateY(-50%) rotate(45deg)",
											zIndex: 0,
										},
									},
								}}
								transformOrigin={{
									horizontal: "right",
									vertical: "top",
								}}
								anchorOrigin={{
									horizontal: "right",
									vertical: "bottom",
								}}
							>
								<MenuItem onClick={() => navigate("/profile")}>
									Profile
								</MenuItem>
								<MenuItem
									onClick={() => navigate("/dashboard")}
								>
									Dashboard
								</MenuItem>
								<MenuItem
									onClick={() => {
										logout();
										navigate("/");
									}}
								>
									Logout
								</MenuItem>
							</Menu>
						</>
					)}
				</Box>
			</section>
		</Box>
	);
};

export default Navbar;
