import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Navbar from "./components/navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./components/login";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import ProfilePage from "./components/profile";
import MyApplicationPage from "./components/myapplication";
import { UserContextProvider } from "./context/user";
import FootBar from "./components/footBar";
import { DocumentViewLayout } from "./components/documentView";
import { HomeLayout } from "./components/home";
import { LoginPageLayout } from "./components/login";
import { ProfilePageLayout } from "./components/profile";
import { DashboardLayout } from "./components/dashboard";

// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
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
								element={<ProfilePageLayout />}
							/>
							<Route
								path="/dashboard"
								exact
								element={<DashboardLayout />}
							></Route>
							<Route
								path="/documentView"
								exact
								element={<DocumentViewLayout />}
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
