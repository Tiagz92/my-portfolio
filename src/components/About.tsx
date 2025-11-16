
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
            <motion.div 
                className="md:col-span-2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                <div className="w-full h-80 bg-gray-300 dark:bg-gray-700 rounded-lg shadow-lg"></div>
            </motion.div>
            <motion.div 
                className="md:col-span-3"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
            >
                <p className="text-lg text-light-secondary dark:text-dark-secondary mb-4">{t('about.paragraph1')}</p>
                <p className="text-lg text-light-secondary dark:text-dark-secondary">{t('about.paragraph2')}</p>
            </motion.div>
        </div>
    );
};

export default About;
