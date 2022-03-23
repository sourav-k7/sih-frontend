import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import FootBar from "./components/footBar";
import { HomeLayout } from "./components/home";
import { LoginPageLayout } from "./components/login";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { ProfilePageLayout } from "./components/profile";
import "./App.css";
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
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
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
