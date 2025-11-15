import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "../data/projects";
import { FiArrowUpRight } from 'react-icons/fi';

const Projects = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 40 }}
			animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
			transition={{ duration: 0.8 }}
			className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
		>
			{projects.map((project, index) => (
				<motion.div
					key={index}
					className="card flex flex-col p-6 transition-all hover:shadow-lg"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
					transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
				>
					<h3 className="text-2xl font-bold mb-3">{project.title}</h3>
					<p className="text-light-foreground/80 dark:text-dark-foreground/80 mb-4 flex-grow">
						{project.description}
					</p>

					<div className="mb-4">
						<h4 className="text-sm font-medium text-light-foreground/60 dark:text-dark-foreground/60 mb-2">
							Technologies :
						</h4>
						<ul className="flex flex-wrap gap-2">
							{project.techStack.map((tech, i) => (
								<li
									key={i}
									className="text-xs font-medium px-2 py-1 bg-accent/10 text-accent dark:bg-accent/20 dark:text-accent rounded-full"
								>
									{tech}
								</li>
							))}
						</ul>
					</div>

					<motion.a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						className="mt-auto inline-flex items-center font-semibold text-accent"
						whileHover={{ gap: 8 }}
					>
						Voir le projet <FiArrowUpRight />
					</motion.a>
				</motion.div>
			))}
		</motion.div>
	);
};

export default Projects;
