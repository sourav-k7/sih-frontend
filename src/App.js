import { HomeLayout } from "./components/home";
import FootBar from "./components/footBar";
import "./App.css";
import Navbar from "./components/navbar";

function App() {
	return (
		
		<div className="App">
			<Navbar />	
			<HomeLayout />
			<FootBar />
		</div>
		
	);
}

export default App;
