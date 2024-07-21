import React from 'react';
import styled from 'styled-components';
import ayushman from './assets/ayushman.jpeg';
import aryan from './assets/aryan.jpeg';
import ryan from './assets/ryan.jpeg';

// Styled Components
const TeamContainer = styled.section`
  padding: 4rem 2rem;
  background: #fff;
  color: #000;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const TeamList = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const TeamMember = styled.a`
  display: block;
  padding: 1.5rem;
  border: 1px solid #000;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s ease, background-color 0.3s ease;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-5px);
    background-color: #f5f5f5;
  }
`;

const MemberImage = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
  border-radius: 50%;
  margin-bottom: 1rem;
  border: 4px solid #000;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
`;

const MemberName = styled.h3`
  margin: 0;
  font-size: 1.5rem;
`;

const MemberRole = styled.p`
  margin: 0.5rem 0;
  font-style: italic;
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

const JoinUsButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background: #000;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

// Component
const OurTeam = () => {
  const teamMembers = [
    {
      name: 'Ayushman Gupta',
      role: 'Founder',
      image: ayushman,
      url: 'https://www.linkedin.com/in/ayushmangupta371/'
    },
    {
      name: 'Aryan Singhal',
      role: 'Member of the Board Of Directors',
      image: aryan,
      url: 'https://www.linkedin.com/in/aryan-singhal-ai/', 
    },
    {
      name: 'Ryan Li',
      role: 'Member of the Board Of Directors',
      image: ryan,
      url: 'https://www.linkedin.com/in/ryan-li07/', 
    },
  ];

  return (
    <TeamContainer id="our-team">
      <SectionTitle>Our Team</SectionTitle>
      <TeamList>
        {teamMembers.map((member, index) => (
          <TeamMember key={index} href={member.url} target="_blank" rel="noopener noreferrer">
            <MemberImage src={member.image} alt={`${member.name} - ${member.role}`} />
            <MemberName>{member.name}</MemberName>
            <MemberRole>{member.role}</MemberRole>
          </TeamMember>
        ))}
      </TeamList>
      <ButtonContainer>
        <JoinUsButton href="https://docs.google.com/forms/d/e/1FAIpQLSf1xsxPfhpJ4WFNGnhgYYE6JJrwY5t5ckf3BoXKKc2y82IzJA/viewform" target="_blank" rel="noopener noreferrer">
          Join Our Team!
        </JoinUsButton>
      </ButtonContainer>
    </TeamContainer>
  );
};

export default OurTeam;
