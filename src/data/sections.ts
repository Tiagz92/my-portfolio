
import { lazy } from 'react';

const Hero = lazy(() => import('../components/Hero'));
const About = lazy(() => import('../components/About'));
const Projects = lazy(() => import('../components/Projects'));
const Skills = lazy(() => import('../components/Skills'));
const Contact = lazy(() => import('../components/Contact'));

export const sections = [
  {
    id: 'home',
    component: Hero,
    containerClassName: 'pt-16 sm:pt-24',
    contentContainerClassName: 'container mx-auto px-4 sm:px-6 lg:px-8',
    isBgAlternate: false
  },
  {
    id: 'about',
    component: About,
    containerClassName: 'py-16 sm:py-24',
    contentContainerClassName: 'container mx-auto px-4 sm:px-6 lg:px-8',
    isBgAlternate: true,
    titleClassName: 'text-3xl sm:text-4xl font-bold mb-12 text-center'
  },
  {
    id: 'projects',
    component: Projects,
    containerClassName: 'py-16 sm:py-24',
    contentContainerClassName: 'container mx-auto px-4 sm:px-6 lg:px-8',
    isBgAlternate: false,
    titleClassName: 'text-3xl sm:text-4xl font-bold mb-12 text-center'
  },
  {
    id: 'skills',
    component: Skills,
    containerClassName: 'py-16 sm:py-24',
    contentContainerClassName: 'container mx-auto px-4 sm:px-6 lg:px-8',
    isBgAlternate: true,
    titleClassName: 'text-3xl sm:text-4xl font-bold mb-12 text-center'
  },
  {
    id: 'contact',
    component: Contact,
    containerClassName: 'py-16 sm:py-24',
    contentContainerClassName: 'container mx-auto px-4 sm:px-6 lg:px-8',
    isBgAlternate: false,
    titleClassName: 'text-3xl sm:text-4xl font-bold mb-12 text-center'
  }
];
