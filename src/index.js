import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./components/login";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import ProfilePage from "./components/profile";
import MyApplicationPage from "./components/myapplication";
import { UserContextProvider } from "./context/user";
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} exact />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/profile" exact element={<ProfilePage />} />
          <Route path="/my-application" exact element={<MyApplicationPage />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
