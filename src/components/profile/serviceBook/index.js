import { Typography } from "@mui/material";
import { useContext } from "react";
import DataDisplay from "../dataDisplay";
import { UserContext } from "../../../context/user";

const ServiceBook = () => {
	const { userState } = useContext(UserContext);
	return (
		<>
			<Typography variant="h4" component="div" gutterBottom>
				Service Book
			</Typography>
			<DataDisplay title={"Designation"} data={userState.designation} />
			<DataDisplay title={"Department"} data={userState.department} />
			<DataDisplay title={"Office"} data={userState.office} />
			<DataDisplay
				title="Date of Joining"
				data={new Date(userState.dateOfJoining).toLocaleDateString(
					"en-IN",
					{
						year: "numeric",
						month: "numeric",
						day: "numeric",
					}
				)}
			/>
			<DataDisplay title={"Education"} data={userState.education} />
		</>
	);
};

export default ServiceBook;
