
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-4">{t('contact.header', 'Parlons-en')}</h3>
                <p className="text-lg text-light-secondary dark:text-dark-secondary mb-6">
                    {t('contact.paragraph', 'Je suis toujours ouvert à de nouvelles opportunités et collaborations. Si vous avez un projet en tête ou si vous souhaitez simplement discuter, n\'hésitez pas à me contacter.')}
                </p>
                <div className="space-y-4">
                    <a href="mailto:tiago.g.dealmeida@gmail.com" className="flex items-center text-lg text-light-secondary dark:text-dark-secondary hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-300">
                        <span className="font-semibold mr-2">Email:</span> tiago.g.dealmeida@gmail.com
                    </a>
                    <div className="flex space-x-6 pt-4">
                        <a href="https://github.com/TiagoGDeAlmeida" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-300">
                            <FaGithub size={28} />
                        </a>
                        <a href="https://www.linkedin.com/in/tiago-goncalves-de-almeida/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-300">
                            <FaLinkedin size={28} />
                        </a>
                    </div>
                </div>
            </motion.div>

            <motion.form 
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
            >
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-light-secondary dark:text-dark-secondary mb-2">{t('contact.form.name')}</label>
                    <input type="text" id="name" name="name" className="w-full px-4 py-3 bg-light-background dark:bg-dark-background border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary focus:outline-none transition-all duration-300" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-light-secondary dark:text-dark-secondary mb-2">{t('contact.form.email')}</label>
                    <input type="email" id="email" name="email" className="w-full px-4 py-3 bg-light-background dark:bg-dark-background border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary focus:outline-none transition-all duration-300" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-light-secondary dark:text-dark-secondary mb-2">{t('contact.form.message')}</label>
                    <textarea id="message" name="message" rows={5} className="w-full px-4 py-3 bg-light-background dark:bg-dark-background border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary focus:outline-none transition-all duration-300"></textarea>
                </div>
                <div className="text-left">
                    <button type="submit" className="px-8 py-3 text-lg font-bold text-white bg-light-primary rounded-full dark:bg-dark-primary hover:bg-light-primary/90 dark:hover:bg-dark-primary/90 transition-all duration-300 shadow-lg">
                        {t('contact.form.submit')}
                    </button>
                </div>
            </motion.form>
        </div>
    );
};

export default Contact;
