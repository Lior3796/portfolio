import logo from "./logo.svg";
import "./styles/css-styles/sass-styles/index.css";
import { Container } from "./components/features/container/Container";
import { Navbar } from "./components/features/navbar/Navbar";
import { Footer } from "./components/features/footer/Footer";

function App() {
	return (
		<div>
			<Navbar />
			<Container />
			<Footer />
		</div>
	);
}

export default App;
