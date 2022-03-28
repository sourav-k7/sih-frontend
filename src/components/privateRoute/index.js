import React from "react";
import { Navigate} from "react-router-dom";

const ProtectedRoute = ({ user, children }) => {
	const token = localStorage.getItem("sih-token");
	if (!token) {
		return <Navigate to="/login" replace />;
	}

	return children;
};

export default ProtectedRoute;
