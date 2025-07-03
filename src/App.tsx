import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6 }}
			className="font-sans text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-950"
			aria-label="Portfolio principal"
		>
			<main id="main-title" className="min-h-screen">
				<section aria-labelledby="hero-section">
					<Hero />
				</section>

				<section aria-labelledby="projects-section" className="py-20 px-6">
					<div className="max-w-6xl mx-auto">
						<h2 className="text-4xl font-bold mb-10 text-center">
							Mes Projets
						</h2>
						<Projects />
					</div>
				</section>

				<section
					aria-labelledby="about-section"
					className="py-20 px-6 bg-gray-100 dark:bg-gray-900"
				>
					<div className="max-w-4xl mx-auto">
						<h2 className="text-4xl font-bold mb-10 text-center">À propos</h2>
						<About />
					</div>
				</section>

				<section aria-labelledby="contact-section" className="py-20 px-6">
					<div className="max-w-2xl mx-auto">
						<h2 className="text-4xl font-bold mb-10 text-center">
							Me Contacter
						</h2>
						<Contact />
					</div>
				</section>
			</main>

			<Footer />
		</motion.div>
	);
}

export default App;
