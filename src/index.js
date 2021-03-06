import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./components/navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { UserContextProvider } from "./context/user";
import FootBar from "./components/footBar";
import { DocumentViewLayout } from "./components/documentView";
import { HomeLayout } from "./components/home";
import { LoginPageLayout } from "./components/login";
import { ProfilePageLayout } from "./components/profile";
import { DashboardLayout } from "./components/dashboard";
import ProtectedRoute from "./components/privateRoute";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
			<ToastContainer
			position="top-right"
			autoClose={5000}
			hideProgressBar
			newestOnTop={true}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			theme="colored"
			pauseOnHover
			/>
		<UserContextProvider>
			<ThemeProvider theme={theme}>
				<div className="App">
					<BrowserRouter>
						<Navbar />
						<Routes>
							<Route path="/" element={<HomeLayout />} exact />
							<Route
								path="/login"
								exact
								element={<LoginPageLayout />}
							/>
							<Route
								path="/profile"
								exact
								element={
									<ProtectedRoute>
										<ProfilePageLayout />
									</ProtectedRoute>
								}
							/>
							<Route
								path="/dashboard"
								exact
								element={
									<ProtectedRoute>
										<DashboardLayout />
									</ProtectedRoute>
								}
							></Route>
							<Route
								path="/documentView/:documentId"
								exact
								element={
									<ProtectedRoute>
										<DocumentViewLayout />
									</ProtectedRoute>
								}
							></Route>
							<Route
								path="*"
								element={
									<main style={{ padding: "1rem" }}>
										<p>404</p>
									</main>
								}
							/>
						</Routes>
						<FootBar />
					</BrowserRouter>
				</div>
			</ThemeProvider>
		</UserContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
