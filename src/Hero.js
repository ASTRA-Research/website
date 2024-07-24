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
  height: 100vh;
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
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 40px;
    top: 150px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
    top: 120px;
  }
`;

const SubTextContainer = styled.div`
  position: absolute;
  top: 300px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  text-align: center;

  @media (max-width: 768px) {
    top: 220px;
  }

  @media (max-width: 480px) {
    top: 180px;
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

// Generate Stars
const generateStars = (numStars, delayStart) => {
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    const size = Math.random() * 3 + 1; // Random size between 1px and 4px
    const top = Math.random() * 100; // Random top position
    const left = Math.random() * 100; // Random left position
    const duration = Math.random() * 5 + 3; // Faster duration between 3s and 8s
    const delay = Math.random() * 5 + delayStart; // Random delay between delayStart and delayStart + 5s

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
      }, 2500); // Delay the appearance of the tagline by the duration of the previous text animation
    }
  }, [messageIndex]);

  useEffect(() => {
    if (showSubText) {
      setTimeout(() => {
        setShowStars(true);
      }, 2500); // Delay the appearance of the stars by the duration of the tagline animation
    }
  }, [showSubText]);

  const handleAnimationComplete = () => {
    if (messageIndex < messages.length - 1) {
      setMessageIndex(prevIndex => prevIndex + 1);
    }
  };

  // Star animation control
  const starVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Generate stars only if animation is done
  const stars = showStars ? generateStars(300, 0) : [];

  return (
    <HeroContainer id="hero">
      <HeroText
        key={messageIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} // No vertical movement
        exit={{ opacity: 0 }}
        transition={{ duration: 2.5 }} // Slower text animation
        onAnimationComplete={handleAnimationComplete}
      >
        {messages[messageIndex]}
      </HeroText>
      {showSubText && (
        <SubTextContainer>
          <SubText
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5 }} // Fade in duration
          >
            Association Of Students for Research in AI
          </SubText>
          <Tagline
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5 }} // Fade in duration
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
          transition={{ duration: 2 }} // Adjusted transition duration
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
    </HeroContainer>
  );
};

export default Hero;
