import { HomeLayout } from "./components/home";
import FootBar from "./components/footBar";
import { Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";

function App() {
	return (
		<div className="App">
			<Navbar />
			{/* <Routes>
      <Route path="/" element={<HomeLayout />} />
    </Routes> */}
			<HomeLayout />
			<FootBar />
		</div>
	);
}

export default App;
