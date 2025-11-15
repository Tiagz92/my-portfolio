import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TrackedSection from './components/TrackedSection';

function App() {
  const [currentSection, setCurrentSection] = useState('Accueil');

  const handleSectionVisible = (sectionName: string) => {
    setCurrentSection(sectionName);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="font-sans"
      aria-label="Portfolio principal"
    >
      <Helmet>
        <title>{`${currentSection} | Tiago De Almeida - Développeur Web`}</title>
      </Helmet>

      <Header />

      <main id="main-title" className="min-h-screen">
        <TrackedSection sectionName="Accueil" onSectionVisible={handleSectionVisible}>
          <section id="hero" aria-labelledby="hero-section">
            <Hero />
          </section>
        </TrackedSection>

        <TrackedSection sectionName="Projets" onSectionVisible={handleSectionVisible}>
          <section id="projects" aria-labelledby="projects-section" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-10 text-center">Mes Projets</h2>
              <Projects />
            </div>
          </section>
        </TrackedSection>

        <TrackedSection sectionName="À propos" onSectionVisible={handleSectionVisible}>
          <section id="about" aria-labelledby="about-section" className="py-20 px-6 bg-light-card dark:bg-dark-card">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-10 text-center">À propos</h2>
              <About />
            </div>
          </section>
        </TrackedSection>

        <TrackedSection sectionName="Compétences" onSectionVisible={handleSectionVisible}>
          <section id="skills" className="py-20 px-6">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Compétences</h2>
              <Skills />
            </div>
          </section>
        </TrackedSection>

        <TrackedSection sectionName="Contact" onSectionVisible={handleSectionVisible}>
          <section id="contact" aria-labelledby="contact-section" className="py-20 px-6 bg-light-card dark:bg-dark-card">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold mb-10 text-center">Me Contacter</h2>
              <Contact />
            </div>
          </section>
        </TrackedSection>
      </main>

      <Footer />
    </motion.div>
  );
}

export default App;
