import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const contactVariants = {
	initial: { opacity: 0, y: 40 },
	animate: { opacity: 1, y: 0 },
};

const Contact = () => {
	return (
		<motion.div
			variants={contactVariants}
			initial="initial"
			animate="animate"
			transition={{ duration: 0.6 }}
			className="text-center"
		>
			<p className="text-lg sm:text-xl text-light-foreground/80 dark:text-dark-foreground/80 mb-8 max-w-2xl mx-auto">
				Have a project in mind or want to connect? I'd love to hear from you.
			</p>

            <motion.a
                href="mailto:tdealmeida85@gmail.com"
                className="btn-primary py-3 px-8 text-lg font-semibold inline-flex items-center gap-2 mb-10"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Send an email to tdealmeida85@gmail.com"
            >
                <FiMail /> Get in Touch
            </motion.a>

			<div className="flex justify-center gap-8 mt-8">
				<motion.a
					href="https://www.linkedin.com/in/tiago-de-almeida-1bb12a233 "
					className="flex flex-col items-center hover:text-accent transition-colors"
                    whileHover={{ scale: 1.2, y: -5 }}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Visit my LinkedIn profile"
				>
					<FaLinkedin size={40} />
					<span className="mt-2 text-sm">LinkedIn</span>
				</motion.a>

				<motion.a
					href="https://github.com/Tiagz92 "
					className="flex flex-col items-center hover:text-accent transition-colors"
                    whileHover={{ scale: 1.2, y: -5 }}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Visit my GitHub profile"
				>
					<FaGithub size={40} />
					<span className="mt-2 text-sm">GitHub</span>
				</motion.a>
			</div>
		</motion.div>
	);
};

export default Contact;
