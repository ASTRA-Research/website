import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Scrollama, Step } from 'react-scrollama';

const OurWorkContainer = styled.section`
  padding: 2rem; /* smaller padding initially */
  background: #fff;
  color: #000;
  transition: padding 1s ease; /* Slower transition for padding change */
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  transition: opacity 1s ease; /* Slower transition for opacity */
`;

const WorkItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transition: opacity 1s ease; /* Slower transition for opacity */
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
    title: 'Multilingual Fact Checking Using LLMs',
    authors: 'Aryan Singhal, Thomas Law, Coby Kassner, Ayushman Gupta, Evan Duan, Aviral Damle, Ryan Luo Li',
    description: 'The recent rise in digital misinformation makes accurate fact-checking essential. In this paper, we investigate the multilingual fact-checking capabilities of five LLMs across five languages using various prompting methods.',
    link: '#',
  },
  {
    title: 'Multi-Omics Approach for Personalized Cancer Treatment',
    authors: 'Dhruv Ramu, Ayushman Gupta',
    description: 'Cancer treatment has significantly advanced, particularly through immunotherapy, which utilizes the body\'s immune system to combat cancer. However, patient responses to immunotherapy vary, necessitating a personalized approach. We are employing a multi-omics strategy to tailor immunotherapy regimens for colorectal cancer (CRC) patients, leveraging electronic health records (EHR), genomic, epigenetic, metabolomic, and other omics data.',
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
      if (!hasAnimated && section && scrollTop >= section.offsetTop - window.innerHeight / 4) { // Adjusted offset for later trigger
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
                    <ReadButton>Coming Soon!</ReadButton>
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
