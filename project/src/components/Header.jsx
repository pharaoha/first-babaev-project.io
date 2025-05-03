import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  background-color: var(--color-surface);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: background-color 0.3s ease;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--space-2) var(--space-3);
`;

const Logo = styled(Link)`
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
  display: flex;
  align-items: center;
  gap: var(--space-1);
  
  &:hover {
    color: var(--color-text-primary);
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: var(--space-3);
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 70%;
    max-width: 300px;
    background-color: var(--color-surface);
    flex-direction: column;
    padding: var(--space-6) var(--space-3);
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease;
    z-index: 200;
  }
`;

const NavLink = styled(Link)`
  color: var(--color-text-secondary);
  font-weight: 500;
  position: relative;
  padding: var(--space-1) 0;
  
  &:hover {
    color: ${({ $section }) => `var(--color-${$section})`};
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${({ $section }) => `var(--color-${$section})`};
    transform: scaleX(${({ $active }) => $active ? '1' : '0'});
    transform-origin: bottom right;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--color-text-primary);
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Overlay = styled.div`
  display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 150;
`;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  return (
    <HeaderContainer>
      <NavContainer>
        <Logo to="/">
          <span>Физика</span>
        </Logo>
        
        <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
        
        <NavLinks isOpen={isMenuOpen}>
          <NavLink 
            to="/mechanics" 
            $section="mechanics" 
            $active={location.pathname === '/mechanics'}
          >
            Механика
          </NavLink>
          <NavLink 
            to="/electrodynamics" 
            $section="electrodynamics" 
            $active={location.pathname === '/electrodynamics'}
          >
            Электродинамика
          </NavLink>
          <NavLink 
            to="/optics" 
            $section="optics" 
            $active={location.pathname === '/optics'}
          >
            Оптика
          </NavLink>
        </NavLinks>
      </NavContainer>
      
      <Overlay isOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
    </HeaderContainer>
  );
}

export default Header;