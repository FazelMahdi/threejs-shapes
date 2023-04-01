import SphereComponent from "./components/SphereComponent";
import CylinderComponent from "./components/CylinderComponent";
import CubeComponent from "./components/CubeComponent";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ErrorPage from "./components/ErrorPage";
import Home from "./routes/Home";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="cube" element={<CubeComponent />} />
			<Route path="cylinder" element={<CylinderComponent />} />
			<Route path="sphere" element={<SphereComponent />} />
			<Route path="*" element={<ErrorPage />} />
		</Routes>
	);
}

export default App;
