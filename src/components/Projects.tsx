import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "../data/Projects";

const Projects: React.FC = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const hoverAnimation: Variants = {
		hover: {
			scale: 1.1,
			color: "#61dafb",
			transition: { ease: "easeOut", duration: 0.3 },
		},
	};

	return (
		<motion.section
			ref={ref}
			className="projects"
			id="projects-section"
			aria-label="This section showcases the projects I have worked on, including descriptions and links to view them."
			initial={{ opacity: 0, y: 50 }}
			animate={inView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.8 }}
		>
			<h2>My Projects</h2>
			<div className="project-list">
				{projects.map((project, index) => (
					<motion.div
						className="project-card"
						key={index}
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: index * 0.2 }}
						whileHover={hoverAnimation.hover}
					>
						<h3>{project.title}</h3>
						<p>{project.description}</p>
						<motion.a
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							whileHover={hoverAnimation.hover}
						>
							View Project
						</motion.a>
					</motion.div>
				))}
			</div>
		</motion.section>
	);
};

export default Projects;
