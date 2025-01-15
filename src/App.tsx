import "./App.css";
import Hero from "./Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { lazy, Suspense } from "react";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { particlesOptions } from "./config/particlesOptions";

const Particles = lazy(() => import("react-tsparticles"));

const App: React.FC = () => {
	const particlesInit = async (main: Engine): Promise<void> => {
		try {
			await loadFull(main);
		} catch (error) {
			console.error("Error loading particles:", error);
			alert(
				"Oops! We couldn't load the particles effect. Try refreshing the page.",
			);
		}
	};

	return (
		<div
			className="app"
			aria-label="Main application"
			aria-labelledby="main-title"
		>
			<Suspense
				fallback={
					<div>
						<p>Loading particles...</p>
						<p>Please wait while we load the interactive elements.</p>
					</div>
				}
			>
				<Particles
					id="tsparticles"
					init={particlesInit}
					options={particlesOptions}
				/>
			</Suspense>
			<Hero />
			<Projects />
			<About />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
