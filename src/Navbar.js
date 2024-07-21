import React from 'react';
import styled from 'styled-components';
import logo from './assets/logo.png';
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #000;
`;

const Logo = styled.div`
  img {
    height: 50px;
     
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
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
`;

const Navbar = () => (
  <NavbarContainer>
    <Logo>
      <img src={logo} alt="Astra Logo" />
    </Logo>
    <NavLinks>
      <NavLink href="#hero">Home</NavLink>
      <NavLink href="#our-work">Our Work</NavLink>
      <NavLink href="#our-team">Our Team</NavLink>
      <NavLink href="#contact-us">Contact Us</NavLink>
    </NavLinks>
  </NavbarContainer>
);

export default Navbar;
