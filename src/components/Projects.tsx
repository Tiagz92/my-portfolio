import React from 'react';

interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'The Plant Spot',
    description: 'a site where you can find the perfect plant for your home with the help of filters like brightness, watering etc...',
    link: 'https://github.com/WildCodeSchool-2024-09/JS-Paris-P2-ThePlantSpot',
  },
  {
    title: 'DysWay',
    description: 'A site that helps people to know more about dyslexia and show a list of celebrities that have dyslexia.',
    link: 'https://tiagz92.github.io/wcs-project1/',
  },
];

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
