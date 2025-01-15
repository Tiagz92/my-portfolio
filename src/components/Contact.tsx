import { motion, type Variants } from "framer-motion";

type ContactProps = {};

const contactVariants: Variants = {
	initial: { opacity: 0, y: 50 },
	animate: { opacity: 1, y: 0 },
};

const hoverAnimation: Variants = {
	hover: { scale: 1.1, color: "#61dafb" },
};

const Contact: React.FC<ContactProps> = () => {
	return (
		<motion.section
			className="contact"
			variants={contactVariants}
			initial="initial"
			animate="animate"
			transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
		>
			<h2>Contact Me</h2>
			<p>
				I'm always open to discussing new projects or ideas. Feel free to reach
				out to me via email or connect with me on LinkedIn and GitHub.
			</p>
			<motion.a
				href="mailto:tdealmeida85@gmail.com"
				variants={hoverAnimation}
				whileHover="hover"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Send an email to tdealmeida85@gmail.com"
			>
				tdealmeida85@gmail.com
			</motion.a>
			<div className="contact-links">
				<motion.a
					href="https://www.linkedin.com/in/tiago-de-almeida-1bb12a233"
					variants={hoverAnimation}
					whileHover="hover"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Visit my LinkedIn profile"
				>
					LinkedIn
				</motion.a>
				<motion.a
					href="https://github.com/Tiagz92"
					variants={hoverAnimation}
					whileHover="hover"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Visit my GitHub profile"
				>
					GitHub
				</motion.a>
			</div>
		</motion.section>
	);
};

export default Contact;
