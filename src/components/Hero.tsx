import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<motion.section
			ref={ref}
			initial={{ opacity: 0, y: 40 }}
			animate={inView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.8, ease: "easeOut" }}
			className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6 py-20"
			aria-labelledby="hero-title"
		>
			<h1
				id="hero-title"
				className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 max-w-3xl leading-tight"
			>
				Hi, I’m Tiago Gonçalves De Almeida
			</h1>

			<p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mb-8">
				For over ten years, I worked as a social coordinator and later as a
				coordination manager, serving elderly and disabled people. Driven by my
				passion for new technologies, I decided to take a leap and, in September
				2024, I completed a Full Stack web development bootcamp at Wild Code
				School. I am currently looking for a 15-month apprenticeship in Toulouse
				to solidify my knowledge. It's never too late...
			</p>

			<motion.a
				href="#projects-section"
				className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md shadow-md transition-colors"
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
			>
				Voir mes projets
			</motion.a>
		</motion.section>
	);
};

export default Hero;
