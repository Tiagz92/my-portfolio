import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
  children: React.ReactNode;
  sectionName: string;
  onSectionVisible: (sectionName: string) => void;
}

const TrackedSection: React.FC<Props> = ({ children, sectionName, onSectionVisible }) => {
  const { ref, inView } = useInView({
    threshold: 0.4, // La section est considérée comme visible lorsque 40% de celle-ci est à l'écran
    triggerOnce: false, // Permet de suivre le défilement vers le haut et vers le bas
  });

  useEffect(() => {
    if (inView) {
      onSectionVisible(sectionName);
    }
  }, [inView, sectionName, onSectionVisible]);

  return <div ref={ref}>{children}</div>;
};

export default TrackedSection;
