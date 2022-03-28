import React from "react";
import { UserContext } from "../../context/user";
import { useContext } from "react";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ user, children }) => {
	// const { userState } = useContext(UserContext);
	// const { token } = userState;
	const token = localStorage.getItem("sih-token");
	console.log("token", token);
	if (!token) {
		return <Navigate to="/login" replace />;
	}

	return children;
};

export default ProtectedRoute;