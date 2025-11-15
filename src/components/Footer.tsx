import { motion } from "framer-motion";

const Footer = () => {
	return (
		<footer lang='fr' className="py-8 text-center">
			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
				className="text-sm text-light-foreground/60 dark:text-dark-foreground/60"
			>
				&copy; {new Date().getFullYear()} Tiago Gonçalves De Almeida. All Rights Reserved.
			</motion.p>
		</footer>
	);
};

export default Footer;
