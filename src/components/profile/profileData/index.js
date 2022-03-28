import { Typography } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../../context/user";
import DataDisplay from "../dataDisplay";

const ProfileData = () => {
	const { userState } = useContext(UserContext);
	return (
		<>
			<Typography variant="h4" component="div" gutterBottom>
				{userState.name}
			</Typography>
			<Typography variant="h5" gutterBottom color={"text.secondary"}>
				Basic profile
			</Typography>
			<DataDisplay title="Email" data={userState.email} />
			<DataDisplay
				title="DOB"
				data={new Date(userState.dateOfBirth).toLocaleDateString(
					"en-IN",
					{
						year: "numeric",
						month: "numeric",
						day: "numeric",
					}
				)}
			/>
		</>
	);
};

export default ProfileData;
