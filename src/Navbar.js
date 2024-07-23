import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from './assets/logo.png';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #000;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled.div`
  img {
    height: 50px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 100%;
    background: #000;
    transition: left 0.3s ease-in-out;
    align-items: center;
    padding: 1rem;
    z-index: 1;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: 1px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    color: #000;
    background-color: #fff;
    border: 1px solid #ccc;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const MenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    z-index: 2;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <Logo>
        <img src={logo} alt="Astra Logo" />
      </Logo>
      <MenuIcon onClick={toggleMenu}>
        {isOpen ? <FiX size={24} color="#fff" /> : <FiMenu size={24} color="#fff" />}
      </MenuIcon>
      <NavLinks isOpen={isOpen}>
        <NavLink href="#hero" onClick={toggleMenu}>Home</NavLink>
        <NavLink href="#our-work" onClick={toggleMenu}>Our Work</NavLink>
        <NavLink href="#our-team" onClick={toggleMenu}>Our Team</NavLink>
        <NavLink href="#contact-us" onClick={toggleMenu}>Contact Us</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
