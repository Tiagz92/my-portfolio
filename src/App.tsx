
import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import TrackedSection from './components/TrackedSection';
import { sections } from './data/sections';
import { ActiveSectionProvider } from './context/ActiveSectionContext';

const App = () => {
  const { t } = useTranslation();

  return (
    <ActiveSectionProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="font-sans"
        aria-label={t('app.main_portfolio_aria_label')}
      >
        <Header />
        <main id="main-title" className="min-h-screen">
          <Suspense fallback={<div>{t('app.loading')}</div>}>
            {sections.map((section, index) => {
              const SectionComponent = section.component;
              return (
                <TrackedSection key={index} sectionName={t(`navigation.${section.id}`)}>
                  <section 
                    id={section.id} 
                    aria-labelledby={`${section.id}-section`} 
                    className={`${section.containerClassName || ''} ${section.isBgAlternate ? 'bg-light-card dark:bg-dark-card' : ''}`}>
                    <div className={section.contentContainerClassName || ''}>
                      {section.id !== 'home' && <h2 id={`${section.id}-section`} className={section.titleClassName}>{t(`navigation.${section.id}`)}</h2>}
                      <SectionComponent />
                    </div>
                  </section>
                </TrackedSection>
              );
            })}
          </Suspense>
        </main>
        <Footer />
      </motion.div>
    </ActiveSectionProvider>
  );
};

export default App;
