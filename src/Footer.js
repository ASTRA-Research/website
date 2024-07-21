import React from 'react';
import styled from 'styled-components';
import { FaLinkedinIn, FaTwitter, FaYoutube, FaDiscord } from 'react-icons/fa'; // Updated imports

// Styled Components
const FooterContainer = styled.footer`
  background: #000;
  color: #fff;
  padding: 2rem;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ccc;
  }
`;

const OtherLinks = styled.div`
  margin-top: 1rem;
`;

const OtherLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 0.5rem;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ccc;
  }
`;

// Component
const Footer = () => (
  <FooterContainer>
    <FooterContent>
      <SocialLinks>
        <SocialLink href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </SocialLink>
        <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </SocialLink>
        <SocialLink href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </SocialLink>
        <SocialLink href="https://discord.com" target="_blank" rel="noopener noreferrer">
          <FaDiscord />
        </SocialLink>
      </SocialLinks>
      <OtherLinks>
        <OtherLink href="#privacy-policy">Privacy Policy</OtherLink>
        <OtherLink href="#terms-of-service">Terms of Service</OtherLink>
      </OtherLinks>
    </FooterContent>
  </FooterContainer>
);

export default Footer;
