import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <footer className="mt-5" style={{ width: '90%', margin: '10px auto', marginBottom: '-20px' }}>
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col className="text-center justify-content-center py-2">
            <Row className='footerLinks' style={{ display: 'block', width: '200px', fontSize: '30px' }}>
              <a href="https://github.com/Kiruba2602/" target="_blank" rel="noreferrer noopener"><FaGithub /></a>
              <a href="https://linkedin.com/in/kirubakaranbalaraman/" target="_blank" rel="noreferrer noopener"><FaLinkedin /></a>
              <a href="mailTo:kirubakaran260202@gmail.com" target="_blank" rel="noreferrer noopener"><GrMail /></a>
            </Row>
            <Row>
            <h4 style={{ letterSpacing: '0.5px', fontWeight: '500', marginBottom: '-40px' }}>Copyright &copy; {year} | All Rights Reserved.</h4>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
