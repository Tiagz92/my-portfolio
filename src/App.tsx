import type React from 'react';
import Hero from './Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';

const App: React.FC = () => {
  const particlesInit = async (main: Engine): Promise<void> => {
    await loadFull(main);
  };

  return (
    <div className="app">
      <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#121212",
          },
        },
        particles: {
          number: {
            value: 50,
          },
          size: {
            value: 3,
          },
          move: {
            enable: true,
            speed: 1,
          },
          links: {
            enable: true,
            color: "61dafb",
            distance: 150,
          },
        },
      }}
    />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
