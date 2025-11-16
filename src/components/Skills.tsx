import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiExpress, SiTailwindcss, SiNextdotjs, SiJest, SiFirebase } from 'react-icons/si';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const skillCategories = [
    {
        title: 'Frontend',
        skills: [
            { name: 'React', icon: <FaReact /> },
            { name: 'Next.js', icon: <SiNextdotjs /> },
            { name: 'JavaScript', icon: <SiJavascript /> },
            { name: 'TypeScript', icon: <SiTypescript /> },
            { name: 'TailwindCSS', icon: <SiTailwindcss /> },
            { name: 'HTML5', icon: <FaHtml5 /> },
            { name: 'CSS3', icon: <FaCss3Alt /> },
        ]
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Node.js', icon: <FaNodeJs /> },
            { name: 'Express', icon: <SiExpress /> },
            { name: 'Firebase', icon: <SiFirebase /> },
        ]
    },
    {
        title: 'Tools & Other',
        skills: [
            { name: 'Git', icon: <FaGitAlt /> },
            { name: 'Jest', icon: <SiJest /> },
            { name: 'Figma', icon: <FaFigma /> },
        ]
    }
];

const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: {
            delay: i * 0.1,
            duration: 0.4,
        }
    })
};

const Skills = () => {
    const { t } = useTranslation();
    let skillCounter = 0;

    return (
        <div>
            <p className='text-center text-lg text-light-secondary dark:text-dark-secondary mb-16 max-w-3xl mx-auto'>
                {t('skills.intro', 'Voici un aperçu des technologies et des outils que j\'utilise régulièrement. Je suis toujours en train d\'apprendre et d\'explorer de nouvelles choses.')}
            </p>
            {skillCategories.map((category) => (
                <div key={category.title} className="mb-12">
                    <h3 className="text-2xl font-bold text-center text-light-text dark:text-dark-text mb-8">{category.title}</h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        {category.skills.map((skill) => {
                            const currentSkillIndex = skillCounter++;
                            return (
                                <motion.div
                                    key={skill.name}
                                    className="flex flex-col items-center justify-center w-36 h-36 p-4 bg-light-card dark:bg-dark-card rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5"
                                    variants={cardVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    custom={currentSkillIndex}
                                >
                                    <div className="text-4xl text-light-primary dark:text-dark-primary mb-3">{skill.icon}</div>
                                    <p className="text-md font-medium text-center text-light-text dark:text-dark-text">{skill.name}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Skills;
