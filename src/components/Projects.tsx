
import { useTranslation } from 'react-i18next';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const projects = [
    {
        name: 'GOAT',
        description: 'goat_desc',
        technologies: ['React', 'Node.js', 'Express', 'Firebase'],
        url: 'https://goat-tiago.netlify.app/',
        github: 'https://github.com/TiagoGDeAlmeida/GOAT'
    },
    {
        name: 'The Plant Spot',
        description: 'the_plant_spot_desc',
        technologies: ['React', 'Tailwind CSS', 'Firebase'],
        url: 'https://theplantspot.netlify.app/',
        github: 'https://github.com/TiagoGDeAlmeida/ThePlantSpot'
    },
    {
        name: 'Dysway',
        description: 'dysway_desc',
        technologies: ['Vue.js', 'Chart.js', 'Netlify'],
        url: 'https://dysway.netlify.app/',
        github: 'https://github.com/TiagoGDeAlmeida/Dysway'
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.5,
        }
    })
};

const Projects = () => {
    const { t } = useTranslation();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    className="group relative flex flex-col bg-light-card dark:bg-dark-card rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={index}
                >
                    <div className="h-48 w-full bg-gray-300 dark:bg-gray-700"></div>
                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-2">{project.name}</h3>
                        <p className="text-light-secondary dark:text-dark-secondary mb-4 flex-grow">{t(`projects.${project.description}`)}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map(tech => (
                                <span key={tech} className="px-3 py-1 bg-light-primary/10 text-light-primary dark:bg-dark-primary/10 dark:text-dark-primary text-xs font-bold rounded-full tracking-wide">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center space-x-6 mt-auto pt-4 border-t border-gray-200 dark:border-gray-800/50">
                             <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium text-light-secondary dark:text-dark-secondary hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-300">
                                <FaExternalLinkAlt className="mr-2" />
                                {t('projects.view_project', 'Voir le projet')}
                            </a>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium text-light-secondary dark:text-dark-secondary hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-300">
                                <FaGithub className="mr-2" />
                                GitHub
                            </a>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Projects;
