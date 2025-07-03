import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const contactVariants = {
	initial: { opacity: 0, y: 40 },
	animate: { opacity: 1, y: 0 },
};

const hoverAnimation = {
	hover: { scale: 1.1, color: "#61dafb" },
};

const Contact = () => {
	return (
		<motion.section
			variants={contactVariants}
			initial="initial"
			animate="animate"
			transition={{ duration: 0.6 }}
			className="py-20 px-6"
		>
			<div className="max-w-3xl mx-auto text-center">
				<h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
					Me Contacter
				</h2>
				<p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
					I'm always open to discussing new projects or ideas. Feel free to
					reach out to me via email or connect with me on LinkedIn and GitHub.
				</p>

				<motion.a
					href="mailto:tdealmeida85@gmail.com"
					className="block text-xl text-blue-600 dark:text-blue-400 hover:underline mb-8"
					variants={hoverAnimation}
					whileHover="hover"
					aria-label="Send an email to tdealmeida85@gmail.com"
				>
					tdealmeida85@gmail.com
				</motion.a>

				<div className="flex justify-center gap-8">
					<motion.a
						href="https://www.linkedin.com/in/tiago-de-almeida-1bb12a233 "
						className="flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
						variants={hoverAnimation}
						whileHover="hover"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Visit my LinkedIn profile"
					>
						<FaLinkedin size={30} />
						<span className="mt-2">LinkedIn</span>
					</motion.a>

					<motion.a
						href="https://github.com/Tiagz92 "
						className="flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
						variants={hoverAnimation}
						whileHover="hover"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Visit my GitHub profile"
					>
						<FaGithub size={30} />
						<span className="mt-2">GitHub</span>
					</motion.a>
				</div>
			</div>
		</motion.section>
	);
};

export default Contact;
