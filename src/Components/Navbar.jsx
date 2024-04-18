import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { AiOutlineHome } from 'react-icons/ai';
import { BsPerson, BsCodeSlash } from 'react-icons/bs';
import { CgPhone } from 'react-icons/cg';
import _ from 'lodash';

const NavComponent = () => {
  const [expanded, setExpanded] = useState(false);
  const [navbarBlur, setNavbarBlur] = useState(false);

  const scrollHandler = _.throttle(() => {
    if (window.scrollY >= 20) {
      setNavbarBlur(true);
    } else {
      setNavbarBlur(false);
    }
  }, 200);

  const showMenu = () => {
    setExpanded(!expanded);
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar expanded={expanded} expand="lg" className={`Navbar ${navbarBlur ? 'blur' : ''}`} fixed="top">
      <Navbar.Brand href="/" className="Logo fs-3">
        Kirubakaran
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={showMenu} />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto NavbarLinks">
          <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
            <AiOutlineHome /> Home
          </Nav.Link>
          <Nav.Link as={Link} to="/About" onClick={() => setExpanded(false)}>
            <BsPerson /> About
          </Nav.Link>
          <Nav.Link as={Link} to="/Project" onClick={() => setExpanded(false)}>
            <BsCodeSlash /> Projects
          </Nav.Link>
          <Nav.Link as={Link} to="/Contact" onClick={() => setExpanded(false)}>
            <CgPhone /> Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavComponent;
