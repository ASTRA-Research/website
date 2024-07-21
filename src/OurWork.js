import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Scrollama, Step } from 'react-scrollama';

const OurWorkContainer = styled.section`
  padding: 2rem; /* smaller padding initially */
  background: #fff;
  color: #000;
  transition: padding 0.5s ease; /* slower transition for padding change */
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const WorkItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const WorkItem = styled.div`
  padding: 1rem;
  border: 1px solid #000;
  border-radius: 8px;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background-color: #f5f5f5;
  }
`;

const WorkTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
`;

const Authors = styled.p`
  margin: 0.5rem 0;
  font-style: italic;
`;

const Description = styled.p`
  margin: 1rem 0;
`;

const ReadButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background: #000;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

const projects = [
  {
    title: 'Can LLMs Verify Arabic Claims? Evaluating the Arabic Fact-Checking Abilities of Multilingual LLMs',
    authors: 'Ayushman Gupta, Veekshith Rao, Thomas Law, Aryan Singhal, Evan Duan, Ryan Luo Li',
    description: 'We evaluate the fact-checking abilities of LLMs on Arabic claims using various prompting methods.',
    link: '#',
  },
  {
    title: 'Multilingual fact checking',
    authors: 'Aryan Singhal, Thomas Law, Coby Kassner, Evan Duan, Aviral Damle, Ayushman Gupta, Ryan Luo Li, Alin Jain',
    description: 'This is a short description of Project 2.',
    link: '#',
  },
  {
    title: 'Using Hybrid Quantum Physics Informed Neural Networks to Simulate Gravity',
    authors: 'Aviral Damle, Thomas Law, Evan Duan, Aryan Singhal, Ayushman Gupta',
    description: 'In this paper, we apply hybrid quantum physics informed neural networks to simulate gravity in various metrics and compute the Ricci tensors for those metrics, and compute computational speedups over classical methods.',
    link: '#',
  },
];

const OurWork = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has occurred

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const section = document.getElementById('our-work');
      if (!hasAnimated && section && scrollTop >= section.offsetTop - window.innerHeight / 2) {
        setIsVisible(true);
        setHasAnimated(true); // Set flag to prevent further animation
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on mount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasAnimated]); // Dependency array to watch changes in hasAnimated

  return (
    <OurWorkContainer id="our-work" style={{ padding: isVisible ? '4rem 2rem' : '2rem' }}>
      <Scrollama onStepEnter={({ data }) => setIsVisible(data === 1)} offset={0.5}>
        <Step data={1}>
          <div>
            <SectionTitle style={{ opacity: isVisible ? 1 : 0 }}>Our Work</SectionTitle>
            <WorkItems style={{ opacity: isVisible ? 1 : 0 }}>
              {projects.map((project, index) => (
                <WorkItem key={index}>
                  <WorkTitle>{project.title}</WorkTitle>
                  <Authors>{project.authors}</Authors>
                  <Description>{project.description}</Description>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ReadButton>Read Now</ReadButton>
                  </a>
                </WorkItem>
              ))}
            </WorkItems>
          </div>
        </Step>
      </Scrollama>
    </OurWorkContainer>
  );
};

export default OurWork;
