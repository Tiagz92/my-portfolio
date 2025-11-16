import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useActiveSection } from '../context/ActiveSectionContext';

const TrackedSection = ({ children, sectionName }: { children: React.ReactNode, sectionName: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (isInView) {
      setActiveSection(sectionName);
    }
  }, [isInView, setActiveSection, sectionName]);

  return <div ref={ref}>{children}</div>;
};

export default TrackedSection;