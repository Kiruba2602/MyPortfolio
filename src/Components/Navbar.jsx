import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { AiOutlineHome } from 'react-icons/ai';
import { BsPerson, BsCodeSlash } from 'react-icons/bs';
import { CgPhone } from 'react-icons/cg';
import Logo from './Logo.jsx';

const NavComponent = () => {
  const [expanded, setExpanded] = useState(false);
  const [navbarBlur, setNavbarBlur] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setNavbarBlur(window.scrollY >= 20);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const toggleNavbar = () => {
    setExpanded(prevExpanded => !prevExpanded);
    console.log("Menu toggled", !expanded);
  };

  return (
    <Navbar expanded={expanded} expand="lg" className={`Navbar ${navbarBlur ? 'blur' : ''}`} fixed="top">
      <Logo />
      <Navbar.Brand href="/myportfolio/" className="Logo fs-3">
        KB
      </Navbar.Brand>
      <div className="Hamburger" onClick={toggleNavbar}>
        <span className={`bar ${expanded ? 'barOne' : ''}`}></span>
        <span className={`bar ${expanded ? 'barTwo' : ''}`}></span>
        <span className={`bar ${expanded ? 'barThree' : ''}`}></span>
      </div>
      <Navbar.Collapse id="responsive-navbar-nav" className={`${expanded ? 'showNavbar' : ''}`}>
        <Nav className="ms-auto NavbarLinks">
          <Nav.Link as={Link} to="/myportfolio/" onClick={() => setExpanded(false)}>
            <AiOutlineHome /> Home
          </Nav.Link>
          <Nav.Link as={Link} to="/myportfolio/About" onClick={() => setExpanded(false)}>
            <BsPerson /> About
          </Nav.Link>
          <Nav.Link as={Link} to="/myportfolio/Project" onClick={() => setExpanded(false)}>
            <BsCodeSlash /> Projects
          </Nav.Link>
          <Nav.Link as={Link} to="/myportfolio/Contact" onClick={() => setExpanded(false)}>
            <CgPhone /> Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavComponent;
