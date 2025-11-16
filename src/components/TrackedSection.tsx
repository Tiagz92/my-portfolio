import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useActiveSection } from '../context/ActiveSectionContext';

interface Props {
  children: React.ReactNode;
  sectionName: string;
}

const TrackedSection: React.FC<Props> = ({ children, sectionName }) => {
  const { ref, inView } = useInView({
    threshold: 0.4, 
    triggerOnce: false,
  });

  const { setActiveSection, activeSection } = useActiveSection();

  useEffect(() => {
    if (inView && activeSection !== sectionName) {
      setActiveSection(sectionName);
    }
  }, [inView, sectionName, setActiveSection, activeSection]);

  return <div ref={ref}>{children}</div>;
};

export default TrackedSection;
