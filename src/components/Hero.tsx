import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiArrowDown } from 'react-icons/fi';
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const Hero = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});
    const [init, setInit] = useState(false);

    useEffect(() => {
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => {
        setInit(true);
      });
    }, []);

    const particlesLoaded = async (_container?: Container) => {
    };


    const options = useMemo(
        () => ({
            background: {
                color: {
                    value: "transparent",
                },
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    repulse: {
                        distance: 100,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.1,
                    width: 1,
                },
                move: {
                    direction: "none" as const,
                    enable: true,
                    outModes: {
                        default: "bounce" as const,
                    },
                    random: false,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.1,
                },
                shape: {
                    type: "circle" as const,
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }),
        [],
      );

	return (
        <div className="relative">
            {init && <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
            />}
            <motion.section
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 relative z-10"
                aria-labelledby="hero-title"
            >
                <p className="text-2xl sm:text-3xl font-semibold mb-2">Tiago GONÇALVES DE ALMEIDA</p>
                <h1
                    id="hero-title"
                    className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 max-w-4xl leading-tight"
                >
                    Full Stack Web Developer
                </h1>

                <p className="text-lg sm:text-xl text-light-foreground/80 dark:text-dark-foreground/80 max-w-3xl mb-10">
                    I build modern and responsive web applications. Let's bring your ideas to life.
                </p>

                <motion.a
                    href="#projects"
                    className="btn-primary py-3 px-8 text-lg font-semibold flex items-center gap-2"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Voir mes projets <FiArrowDown />
                </motion.a>
            </motion.section>
        </div>
	);
};

export default Hero;
