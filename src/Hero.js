import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// Styled Components
const HeroContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 91vh; // Increased height
  background: #000;
  color: #fff;
  text-align: center;
  overflow: hidden;

  @media (max-width: 768px) {
    height: auto;
    padding: 2rem 1rem;
  }
`;

const HeroText = styled(motion.div)`
  font-size: 60px;
  font-family: 'Poppins', sans-serif;
  position: absolute;
  top: 280px; // Adjusted position
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 40px;
    top: 100px; // Adjusted position
  }

  @media (max-width: 480px) {
    font-size: 30px;
    top: 80px; // Adjusted position
  }
`;

const SubTextContainer = styled.div`
  position: absolute;
  top: 370px; // Adjusted position
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  text-align: center;

  @media (max-width: 768px) {
    top: 180px; // Adjusted position
  }

  @media (max-width: 480px) {
    top: 140px; // Adjusted position
  }
`;

const SubText = styled(motion.div)`
  font-size: 30px;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Tagline = styled(motion.div)`
  font-size: 20px;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const move = keyframes`
  0% { transform: translateY(0) translateX(0); opacity: 0.8; }
  50% { transform: translateY(-20px) translateX(20px); opacity: 1; }
  100% { transform: translateY(0) translateX(0); opacity: 0.8; }
`;

const Star = styled(motion.div)`
  position: absolute;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.9);
  opacity: 0;
  animation: ${move} 5s ease-in-out infinite;

  ${({ size, top, left, duration, delay }) => `
    width: ${size}px;
    height: ${size}px;
    top: ${top}%;
    left: ${left}%;
    animation-duration: ${duration}s;
    animation-delay: ${delay}s;
  `}
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-15px);
  }
  60% {
    transform: translateY(-7px);
  }
`;

const ArrowDown = styled.div`
  position: absolute;
  bottom: 20px; // Position at the bottom
  font-size: 30px;
  color: #fff;
  animation: ${bounce} 2s infinite;
  cursor: pointer;
`;

const generateStars = (numStars, delayStart) => {
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    const size = Math.random() * 3 + 1;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const duration = Math.random() * 5 + 3;
    const delay = Math.random() * 5 + delayStart;

    stars.push({ size, top, left, duration, delay });
  }
  return stars;
};

const Hero = () => {
  const [showStars, setShowStars] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [showSubText, setShowSubText] = useState(false);

  const messages = [
    'Pioneering AI Research',
    'Empowering Tomorrow’s Innovators',
    'Shaping the Future of AI',
    'We are ASTRA'
  ];

  useEffect(() => {
    if (messageIndex === messages.length - 1) {
      setTimeout(() => {
        setShowSubText(true);
      }, 2500);
    }
  }, [messageIndex]);

  useEffect(() => {
    if (showSubText) {
      setTimeout(() => {
        setShowStars(true);
      }, 2500);
    }
  }, [showSubText]);

  const handleAnimationComplete = () => {
    if (messageIndex < messages.length - 1) {
      setMessageIndex(prevIndex => prevIndex + 1);
    }
  };

  const starVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const stars = showStars ? generateStars(300, 0) : [];

  return (
    <HeroContainer id="hero">
      <HeroText
        key={messageIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2.5 }}
        onAnimationComplete={handleAnimationComplete}
      >
        {messages[messageIndex]}
      </HeroText>
      {showSubText && (
        <SubTextContainer>
          <SubText
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5 }}
          >
            Association Of Students for Research in AI
          </SubText>
          <Tagline
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5 }}
          >
            For the advancement of Artificial Intelligence research—by students
          </Tagline>
        </SubTextContainer>
      )}
      {stars.map((star, index) => (
        <Star
          key={index}
          initial="hidden"
          animate="visible"
          variants={starVariants}
          transition={{ duration: 2 }}
          style={{
            width: star.size,
            height: star.size,
            position: 'absolute',
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '50%',
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.9)',
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
      <ArrowDown onClick={() => document.getElementById('our-work').scrollIntoView({ behavior: 'smooth' })}>
        ↓
      </ArrowDown>
    </HeroContainer>
  );
};

export default Hero;
