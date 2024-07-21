import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// Styled Components
const HeroContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #000;
  color: #fff;
  text-align: center;
  overflow: hidden;
`;

const HeroText = styled.div`
  font-size: 40px; /* Increased font size */
  font-family: 'Arial', sans-serif; /* Changed font family */
  z-index: 1;
  transition: transform 0.3s ease;
  transform: translateY(-20px);
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
  animation: ${move} 5s ease-in-out infinite; /* Faster movement */
  
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
const generateStars = (numStars) => {
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    const size = Math.random() * 3 + 1; // Random size between 1px and 4px
    const top = Math.random() * 100; // Random top position
    const left = Math.random() * 100; // Random left position
    const duration = Math.random() * 5 + 3; // Faster duration between 3s and 8s
    const delay = Math.random() * 5; // Random delay between 0s and 5s

    stars.push({ size, top, left, duration, delay });
  }
  return stars;
};

const Hero = () => {
  const [showStars, setShowStars] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    'Innovating the future',
    'Empowering minds',
    'Leading with vision',
    'Transforming the world',
    'We are ASTRA'
  ];

  const handleAnimationComplete = () => {
    if (messageIndex < messages.length - 1) {
      setMessageIndex(prevIndex => prevIndex + 1);
    } else {
      setShowStars(true);
    }
  };

  // Star animation control
  const starVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Generate stars only if animation is done
  const stars = showStars ? generateStars(300) : [];

  return (
    <HeroContainer id="hero">
      <HeroText>
        <motion.div
          key={messageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }} /* Slower text animation */
          onAnimationComplete={handleAnimationComplete}
        >
          {messages[messageIndex]}
        </motion.div>
      </HeroText>
      {stars.map((star, index) => (
        <Star
          key={index}
          initial="hidden"
          animate="visible"
          variants={starVariants}
          transition={{ duration: 2 }} /* Adjusted transition duration */
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
