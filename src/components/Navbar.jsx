import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  background: rgba(255,255,255,0.97); backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0,0,0,0.06); padding: 0 5%;
`
const NavInner = styled.div`
  display: flex; align-items: center; justify-content: space-between; height: 68px;
`
const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.fontDisplay};
  font-size: 1.4rem; font-weight: 700; color: ${({ theme }) => theme.text}; letter-spacing: -0.5px;
`
const NavLinks = styled.ul`
  display: flex; align-items: center; gap: 36px; list-style: none;
  @media (max-width: 640px) { display: none; }
`
const NavLink = styled(Link)`
  font-size: .9rem; font-weight: 500; color: ${({ theme }) => theme.text};
  transition: color .2s;
  &:hover { color: ${({ theme }) => theme.teal}; }
`
const LoginBtn = styled(Link)`
  background: ${({ theme }) => theme.teal}; color: white;
  padding: 9px 22px; border-radius: 3px; font-size: .82rem; font-weight: 600;
  transition: background .2s;
  &:hover { background: ${({ theme }) => theme.tealDark}; }
`
const Hamburger = styled.button`
  display: none; flex-direction: column; gap: 5px; background: none; border: none; padding: 4px;
  @media (max-width: 640px) { display: flex; }
  span { display: block; width: 24px; height: 2px; background: ${({ theme }) => theme.text}; border-radius: 2px; transition: all .3s; }
  &.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  &.open span:nth-child(2) { opacity: 0; }
  &.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
`
const MobileMenu = styled.div`
  display: none; position: fixed; top: 68px; left: 0; right: 0;
  background: white; z-index: 999; padding: 20px 5%;
  flex-direction: column; box-shadow: 0 8px 24px rgba(0,0,0,.08);
  &.open { display: flex; }
  a { font-size: 1rem; font-weight: 500; padding: 12px 0;
    border-bottom: 1px solid ${({ theme }) => theme.lightGray};
    &:last-child { border-bottom: none; color: ${({ theme }) => theme.teal}; font-weight: 600; }
    &:hover { color: ${({ theme }) => theme.teal}; }
  }
`

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Nav>
        <NavInner>
          <Logo to="/">ArchiWeb</Logo>
          <NavLinks>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/#projects">Projects</NavLink></li>
            <li><NavLink to="/#about">About</NavLink></li>
            <li><NavLink to="/#contact">Contact</NavLink></li>
          </NavLinks>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <LoginBtn to="/login">Login</LoginBtn>
            <Hamburger className={menuOpen ? 'open' : ''} onClick={() => setMenuOpen(!menuOpen)}>
              <span /><span /><span />
            </Hamburger>
          </div>
        </NavInner>
      </Nav>
      <MobileMenu className={menuOpen ? 'open' : ''}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/#projects" onClick={() => setMenuOpen(false)}>Projects</Link>
        <Link to="/#about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <Link to="/login" onClick={() => setMenuOpen(false)}>Login →</Link>
      </MobileMenu>
    </>
  )
}