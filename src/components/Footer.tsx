import { motion } from "framer-motion";

const Footer: React.FC = () => {
	return (
		<footer className="footer">
			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				Built by Tiago with Love ❤️
			</motion.p>
		</footer>
	);
};

export default Footer;
