import { motion, Variants } from "framer-motion";
import CV from "../assets/images/Cv alternance.pdf"; // Import direct du fichier PDF

const aboutVariants: Variants = {
	initial: { opacity: 0, y: 50 },
	animate: { opacity: 1, y: 0 },
};

const About = (): JSX.Element => {
	return (
		<motion.section
			className="about"
			variants={aboutVariants}
			initial="initial"
			animate="animate"
			transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
		>
			<h2>About Me</h2>
			<p>
				For over ten years, I worked as a social coordinator and later as a
				coordination manager, serving elderly and disabled people. Driven by my
				passion for new technologies, I decided to take a leap and, in September
				2024, I completed a Full Stack web development bootcamp at Wild Code
				School. I am currently looking for a 15-month apprenticeship in Toulouse
				to solidify my knowledge. It's never too late...
			</p>
			<a
				href={CV || "#"}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Download my CV in PDF format"
				onClick={(e) => {
					if (!CV) {
						e.preventDefault();
						alert("Sorry, the CV is currently unavailable.");
					}
				}}
			>
				Download my CV
			</a>
		</motion.section>
	);
};

export default About;
