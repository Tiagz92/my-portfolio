import "./App.css";
import "./index.css";
import Hero from "./Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
	return (
		<div
			className="app"
			aria-label="Main application"
			aria-labelledby="main-title"
		>
			<Hero />
			<Projects />
			<About />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
