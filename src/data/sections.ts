import { lazy } from 'react';

const Hero = lazy(() => import('../components/Hero'));
const Projects = lazy(() => import('../components/Projects'));
const About = lazy(() => import('../components/About'));
const Skills = lazy(() => import('../components/Skills'));
const Contact = lazy(() => import('../components/Contact'));

interface SectionData {
  name: string;
  id: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
  containerClassName?: string;
  titleClassName?: string;
  contentContainerClassName?: string;
  isBgAlternate?: boolean;
}

export const sections: SectionData[] = [
  {
    name: 'Accueil',
    id: 'hero',
    component: Hero,
  },
  {
    name: 'Projets',
    id: 'projects',
    component: Projects,
    containerClassName: 'py-20 px-6',
    contentContainerClassName: 'max-w-6xl mx-auto',
    titleClassName: 'text-4xl font-bold mb-10 text-center',
  },
  {
    name: 'À propos',
    id: 'about',
    component: About,
    containerClassName: 'py-20 px-6',
    contentContainerClassName: 'max-w-4xl mx-auto',
    titleClassName: 'text-4xl font-bold mb-10 text-center',
    isBgAlternate: true,
  },
  {
    name: 'Compétences',
    id: 'skills',
    component: Skills,
    containerClassName: 'py-20 px-6',
    contentContainerClassName: 'container mx-auto',
    titleClassName: 'text-3xl font-bold text-center mb-12',
  },
  {
    name: 'Contact',
    id: 'contact',
    component: Contact,
    containerClassName: 'py-20 px-6',
    contentContainerClassName: 'max-w-2xl mx-auto',
    titleClassName: 'text-4xl font-bold mb-10 text-center',
    isBgAlternate: true,
  },
];
