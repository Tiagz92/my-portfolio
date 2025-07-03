import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "../data/Projects";

const Projects = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<motion.section
			ref={ref}
			initial={{ opacity: 0, y: 40 }}
			animate={inView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.8 }}
			id="projects-section"
			className="py-20 px-6 bg-gray-50 dark:bg-gray-900"
			aria-label="Section présentant mes projets web avec descriptions, stack technique et liens."
		>
			<div className="max-w-6xl mx-auto">
				<h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
					Mes Projets
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.3, delay: index * 0.1 }}
							whileHover={{
								y: -10,
								boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
							}}
							className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col h-full"
						>
							<h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
								{project.title}
							</h3>
							<p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
								{project.description}
							</p>

							<div className="mb-4">
								<h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
									Technologies :
								</h4>
								<ul className="flex flex-wrap gap-2">
									{project.techStack.map((tech, i) => (
										<li
											key={i}
											className="text-xs font-medium px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full"
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
								className="mt-auto inline-block text-blue-600 dark:text-blue-400 hover:underline font-medium"
								whileHover={{ x: 5 }}
							>
								Voir le projet →
							</motion.a>
						</motion.div>
					))}
				</div>
			</div>
		</motion.section>
	);
};

export default Projects;
