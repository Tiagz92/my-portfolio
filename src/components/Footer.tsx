import { motion } from "framer-motion";

const Footer = () => {
	return (
		<footer className="py-6 bg-gray-100 dark:bg-gray-800 text-center">
			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
				className="text-sm sm:text-base text-gray-600 dark:text-gray-400"
			>
				Built by Tiago with Love ❤️
			</motion.p>
		</footer>
	);
};

export default Footer;
